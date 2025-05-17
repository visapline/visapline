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


export interface PuertosRequest {
  puerto: string;
  tarjeta: string;
  txtOlt: string;
}

export interface DispositivoDto {
  onu: string;
  puerto: string;
  tarjeta: string;
  onuIndex: string;
  adminState: string;
  omccState: string;
  phaseState: string;
  channel: string;
  oltName: string;
  rx: string;
  tx: string;
  userName: string;
  estadoDb: string;
  estadocDb: string;
  serialDb: string;
  identificacionDb: string;
  estadoRXVisual: string;
  estadoPhaseStateVisual: string;
}


export interface PuertosApiResponse {
  mensaje: string;
  dispositivos: DispositivoDto[];
}