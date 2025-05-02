import { ENV, decodeToken } from "../utils";
import axios from "axios";

export class User {
  async getUserById(token: string) {
    try {
      // Decodificar el token para obtener el ID
      const { idusuario } = decodeToken(token);

      // Construir la URL con el ID específico
      const url = `${ENV.API_URL}${ENV.ENDPOINTS.USUARIOS.GET_USER_BY_ID}/${idusuario}`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json", // ← Fuerza la respuesta en JSON
        },
      });

      return response.data; // Devuelve solo los datos del usuario solicitado
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message || "Error al obtener el usuario";
        console.error("Error en User.getUserById:", errorMessage);
        throw new Error(errorMessage);
      }
      console.error("Error inesperado en User.getUserById:", error);
      throw new Error("Error inesperado al obtener el usuario");
    }
  }
}
