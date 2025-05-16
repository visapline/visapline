import axios from "axios";
import { ENV } from "../utils";
import { PuertoApiResponse, PuertoOltDto } from "../types/Puertos";

export class PuertoOlt {
  async getAll(): Promise<PuertoOltDto[]> {
    const url = `${ENV.API_URL}${ENV.ENDPOINTS.PUERTOS.GET_ALL}`;
    const response = await axios.get<PuertoApiResponse[]>(url);

    const result: PuertoOltDto[] = response.data.map((puerto) => ({
      id: puerto.idPuerto,
      numero: puerto.numero,
        tarjetaId: puerto.tarjetaId,
    }));

    return result;
  }
}