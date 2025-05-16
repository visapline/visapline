import axios from "axios";
import { ENV } from "../utils";
import { TarjetaOltDto, TarjetaApiResponse } from "../types/Tarjetas";

export class TarjetaOlt {
  async getAll(): Promise<TarjetaOltDto[]> {
    const url = `${ENV.API_URL}${ENV.ENDPOINTS.TARJETAS.GET_ALL}`;
    const response = await axios.get<TarjetaApiResponse[]>(url);

    const result: TarjetaOltDto[] = response.data.map((t) => ({
      id: t.idTarjeta,
      oltIdolt: t.oltIdolt, // <- ¡esto es clave!
      referencia: t.referencia,
    }));

    return result;
  }
}
