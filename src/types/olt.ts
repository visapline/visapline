// types/olt.ts
export interface OltDto {
  id: number;
  nombre: string;
}
export interface OltApiResponse {
  idOlt: number;
  ip: string;
  puerto: number;
  nodoIdNodo: number;
  idInventario: number | null;
  usuarioOlt: string;
  contraseniaOlt: string;
  nombreOlt: string;
  tipoOlt: number;
  centroCostoId: number;
}