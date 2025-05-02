// auth.ts (o donde tengas tus utilidades de autenticación)
export const decodeToken = (token: string): { idusuario: number } => {
  try {
    const payload = token.split(".")[1]; // El payload está en la segunda parte del JWT
    const decoded = atob(payload); // Decodifica base64

    return JSON.parse(decoded);
  } catch (error) {
    console.error("Error al decodificar el token:", error);
    throw new Error("Token inválido");
  }
};
