import axios from "axios";
import { ENV } from "../utils";
import { OltDto, OltApiResponse, PuertosApiResponse, PuertosRequest, DispositivoDto } from "../types/olt";

export class Olt {
  async getAll(): Promise<OltDto[]> {
    const url = `${ENV.API_URL}${ENV.ENDPOINTS.OLTS.GET_ALL}`;
    const response = await axios.get<OltApiResponse[]>(url);

    const result: OltDto[] = response.data.map((olt) => ({
      id: olt.idOlt,
      nombre: olt.nombreOlt,
    }));

    return result;
  }




  async getPuertosPorTarjeta(req: PuertosRequest): Promise<DispositivoDto[]> {
    const url = `${ENV.API_URL}${ENV.ENDPOINTS.OLTS.PUERTOS}`;
    const resp = await axios.post<PuertosApiResponse>(url, req);
    return resp.data.dispositivos;
  }
}
