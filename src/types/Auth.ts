import { User } from "./User";

export interface AuthContextType {
  User: User | null;
  token: string | null; // Añade el token aquí
  login: (token: string) => Promise<void>; // Ajusta para que coincida con la implementación
  logout: () => void;
}
export type Token = string | null;

export interface LoginResponse {
  token: string;
}

export interface LoginParams {
  usuario: string;
  contrasena: string;
}
