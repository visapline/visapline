import { ENV } from "../utils";
import { LoginParams, LoginResponse } from "../types";

export class Auth {
  async login({ usuario, contrasena }: LoginParams): Promise<LoginResponse> {
    try {
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.USUARIOS.LOGIN}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: usuario,
          contrasena: contrasena,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el login");
      }

      const data: LoginResponse = await response.json();

      return data;
    } catch (error) {
      console.error("Error en Auth.login:", error);
      throw error;
    }
  }

  async setAccessToken(token: string): Promise<void> {
    try {
      localStorage.setItem("accessToken", token);
    } catch (error) {
      console.error("Error al guardar el token de acceso:", error);
      throw error;
    }
  }

  async GetAccessToken(): Promise<string | null> {
    try {
      return localStorage.getItem("accessToken");
    } catch (error) {
      console.error("Error al obtener el token de acceso:", error);
      throw error;
    }
  }

  async removeAccessToken(): Promise<void> {
    try {
      localStorage.removeItem("accessToken");
    } catch (error) {
      console.error("Error al eliminar el token de acceso:", error);
      throw error;
    }
  }
}
