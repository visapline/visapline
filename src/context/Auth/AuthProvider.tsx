import { useState, useEffect, useCallback, useMemo } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types";
import { Auth } from "../../api/auth";
import { User as UserController } from "../../api/User";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [User, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);


  // Memoizar las instancias para que no se recrean en cada render
  const userController = useMemo(() => new UserController(), []);
  const authController = useMemo(() => new Auth(), []);


  const login = useCallback(async (token: string) => {
    try {
      const response = await userController.getUserById(token);
  
      const userData: User = {
        idusuario: response.idusuario,
        user: response.user,
        contrasena: response.contrasena,
        idtercero: response.idtercero,
        tercero: response.tercero,
        image: response.image,
        huella: response.huella,
      };
  
      setUser(userData);
      setToken(token);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }, [userController]);

  const logout = useCallback(async () => {
    try {
      setUser(null);
      setToken(null);
      await authController.removeAccessToken();
    } catch (error) {
      console.error("Logout error:", error);
    }
  }, [authController]);

  const checkAuth = useCallback(async () => {
    try {
      const accessToken = await authController.GetAccessToken();
      if (!accessToken) {
        await logout();
        return;
      } else {
        await login(accessToken);
      }
    } catch (error) {
      console.error("Error al verificar la autenticación:", error);
      await logout();
    } finally {
      setLoading(false);
    }
  }, [authController, login, logout]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  

  if (loading) return null;

  const data = {
    User, // o User, dependiendo de tu AuthContextType
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
