export interface PuertoOltDto {
  id: number;
  numero: number;
  tarjetaId: number;
}
export interface PuertoApiResponse {
  idPuerto: number;
  numero: number;
  tarjetaId: number;
  descripcion: string | null;

}