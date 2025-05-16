export interface TarjetaOltDto {
  id: number;
  oltIdolt: number;
  referencia: string;
}
export interface TarjetaApiResponse {
  idTarjeta: number;
  referencia: string;
  maxPuerto: number;
  oltIdolt: number;
  status: string
}