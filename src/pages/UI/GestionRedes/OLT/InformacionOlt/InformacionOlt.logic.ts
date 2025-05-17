import { useState, useEffect } from "react";
import { Olt } from "../../../../../api/Olt";
import { PuertosRequest, DispositivoDto } from "../../../../../types/olt";
import { TarjetaOlt } from "../../../../../api/TarjetaOlt";
import { PuertoOlt } from "../../../../../api/Puertos";
import { OltDto } from "../../../../../types/olt";
import { TarjetaOltDto } from "../../../../../types/Tarjetas";
import { PuertoOltDto } from "../../../../../types/Puertos";
import { Data } from "../../../../../types/Tabla-types";
import axios from "axios";

export const InformacionOltLogic = () => {
  // Datos maestros
  const [olts, setOlts] = useState<OltDto[]>([]);
  const [tarjetas, setTarjetas] = useState<TarjetaOltDto[]>([]);
  const [puertos, setPuertos] = useState<PuertoOltDto[]>([]);

  // Selecciones
  const [selectedOlt, setSelectedOlt] = useState<string>("");
  const [selectedOltName, setSelectedOltName] = useState<string>("");
  const [selectedTarjeta, setSelectedTarjeta] = useState<string>("");
  const [selectedTarjetaReferencia, setSelectedTarjetaReferencia] =
    useState<string>(""); // para enviar al backend
  const [selectedPuerto, setSelectedPuerto] = useState<string>("");
  const [selectedPuertoNumero, setSelectedPuertoNumero] = useState<string>("");

  // Filtrados
  const [tarjetasFiltradas, setTarjetasFiltradas] = useState<TarjetaOltDto[]>(
    []
  );
  const [puertosFiltrados, setPuertosFiltrados] = useState<PuertoOltDto[]>([]);

  // Resultado de la consulta
  const [datosTabla, setDatosTabla] = useState<Data[]>([]);
  const [resultados, setResultados] = useState<DispositivoDto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Carga inicial
    const fetch = async () => {
      const oltSvc = new Olt();
      const tarSvc = new TarjetaOlt();
      const puSvc = new PuertoOlt();

      const [oltsData, tarjetasData, puertosData] = await Promise.all([
        oltSvc.getAll(),
        tarSvc.getAll(),
        puSvc.getAll(),
      ]);

      setOlts(oltsData);
      setTarjetas(tarjetasData);
      setPuertos(puertosData);
    };
    fetch();
  }, []);

  const handleOltChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const oltId = e.target.value;
    setSelectedOlt(oltId);

    // Busca el nombre por id
    const oltObj = olts.find((o) => o.id.toString() === oltId);
    setSelectedOltName(oltObj ? oltObj.nombre : "");

    // Filtrar tarjetas por OLT
    const filtradas = tarjetas
      .filter((t) => t.oltIdolt === Number(oltId))
      .sort((a, b) => Number(a.referencia) - Number(b.referencia));
    setTarjetasFiltradas(filtradas);

    // Reset
    setSelectedTarjeta("");
    setPuertosFiltrados([]);
    setSelectedPuerto("");
    setResultados([]);
    setError(null);
  };

  const handleTarjetaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tarjetaId = e.target.value;
    setSelectedTarjeta(tarjetaId); // aquí guardas el id de la tarjeta

    // Buscar referencia según el id seleccionado
    const tarjeta = tarjetas.find((t) => t.id.toString() === tarjetaId);
    setSelectedTarjetaReferencia(tarjeta ? tarjeta.referencia : "");

    // Filtrar puertos por id numérico
    const filtrados = puertos
      .filter((p) => p.tarjetaId === Number(tarjetaId))
      .sort((a, b) => a.numero - b.numero);
    setPuertosFiltrados(filtrados);

    // Reset selección puerto, resultados y error
    setSelectedPuerto("");
    setResultados([]);
    setError(null);
  };

  const handlePuertoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const puertoId = e.target.value;
    setSelectedPuerto(puertoId);
    const puerto = puertos.find((p) => p.id.toString() === puertoId);
    setSelectedPuertoNumero(puerto ? puerto.numero.toString() : "");
    setResultados([]);
    setError(null);
  };

  // --- Nuevo handler de consulta ---
  const handleConsulta = async () => {
    // Validar que todo esté seleccionado
    if (!selectedOlt || !selectedTarjeta || !selectedPuerto) {
      setError("Debe seleccionar OLT, tarjeta y puerto.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const svc = new Olt();
      const req: PuertosRequest = {
        txtOlt: selectedOltName,
        tarjeta: selectedTarjetaReferencia,
        puerto: selectedPuertoNumero,
      };

      const dispositivos = await svc.getPuertosPorTarjeta(req);

      setResultados(dispositivos);
      // Transformación para la tabla
      const datosParaTabla: Data[] = dispositivos.map((item, index) => ({
        estado: item.phaseState || "",
        tarjeta: item.tarjeta || "", // minúscula
        puerto: item.puerto || "",
        id: Number(item.onu) || index + 1,
        nombre: item.userName || "",
        usuario: item.identificacionDb || "",
        rx: item.rx || "",
        tx: item.tx || "",
        serial_db: item.serialDb || "",
        serv: item.estadoDb || "",
        cont: item.estadocDb || "",
        barrid: "", // puedes completar con item.barrio si existe
      }));

      setDatosTabla(datosParaTabla);
    } catch (err: unknown) {
      console.error(err);

      // Mensaje por defecto
      let message = "Error desconocido en la consulta.";

      // Si es un error de Axios
      if (axios.isAxiosError(err)) {
        message = err.response?.data?.mensaje || err.message;
      }
      // Si es cualquier otro Error de JS
      else if (err instanceof Error) {
        message = err.message;
      }

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return {
    // Maestros y filtrados
    olts,
    tarjetasFiltradas,
    puertosFiltrados,

    // Selecciones
    selectedOlt,
    selectedTarjeta,
    selectedPuerto,

    // Resultados
    resultados,
    loading,
    error,
    datosTabla,

    // Handlers
    handleOltChange,
    handleTarjetaChange,
    handlePuertoChange,
    handleConsulta,
  };
};
