export interface User {
    idusuario: number;
    user: string;
    contrasena: string;
    idtercero: number;
    tercero: {
      idterceros: number;
      estrato: string;
      estado: string;
      tiporesidenciaIdtiporesidencia: number;
      tipofacturaIdtipofactura: number | null;
      identificacion: string;
      nombre: string;
      apellido: string;
      correo: string;
      direccion: string;
      barrioIdbarrio: number;
      fechexp: string; // Podrías usar Date si la parseas
      tipodocIdtipodoc: number;
      rh: string | null;
    };
    image: string | null;
    huella: string | null;
  }
  

  export interface LoginResponse {
    token: string;
  }