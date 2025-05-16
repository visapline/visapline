import axios from "axios";
import { ENV } from "../utils";
import { OltDto, OltApiResponse } from "../types/olt";

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
}
