import { useState, useEffect } from "react";
import { Olt } from "../../../../../api/Olt";
import { TarjetaOlt } from "../../../../../api/TarjetaOlt";
import { PuertoOlt } from "../../../../../api/Puertos";
import { OltDto } from "../../../../../types/olt";
import { TarjetaOltDto } from "../../../../../types/Tarjetas";
import { PuertoOltDto } from "../../../../../types/Puertos"; // Ajusta la ruta según tu estructura

export const InformacionOltLogic = () => {
  const [olts, setOlts] = useState<OltDto[]>([]);
  const [selectedOlt, setSelectedOlt] = useState<string>("");
  const [puertos, setPuertos] = useState<PuertoOltDto[]>([]);
  const [selectedPuerto, setSelectedPuerto] = useState<string>("");

  const [tarjetas, setTarjetas] = useState<TarjetaOltDto[]>([]);
  const [tarjetasFiltradas, setTarjetasFiltradas] = useState<TarjetaOltDto[]>(
    []
  );
  const [selectedTarjeta, setSelectedTarjeta] = useState<string>("");

  const [puertosFiltrados, setPuertosFiltrados] = useState<PuertoOltDto[]>([]);

  useEffect(() => {
    const fetchOlts = async () => {
      const oltService = new Olt();
      const data = await oltService.getAll();
      setOlts(data);
    };
    const fetchPuertos = async () => {
      const puertoService = new PuertoOlt();
      const data = await puertoService.getAll();
      setPuertos(data);
    };

    const fetchTarjetas = async () => {
      const tarjetaService = new TarjetaOlt();
      const data = await tarjetaService.getAll();
      setTarjetas(data);
    };

    fetchOlts();
    fetchTarjetas();
    fetchPuertos();
  }, []);

  const handleOltChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const oltId = e.target.value;
    setSelectedOlt(oltId);

    // Filtrar tarjetas por olt seleccionada
    const filtradas = tarjetas
      .filter((t) => t.oltIdolt === Number(oltId))
      .sort((a, b) => Number(a.referencia) - Number(b.referencia));

    setTarjetasFiltradas(filtradas);
    setSelectedTarjeta(""); // Reiniciar selección de tarjeta
  };

  const handleTarjetaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tarjetaId = e.target.value;
    setSelectedTarjeta(tarjetaId);

    const filtrados = puertos
      .filter((p) => p.tarjetaId === Number(tarjetaId))
      .sort((a, b) => a.numero - b.numero);

    setPuertosFiltrados(filtrados);
  };

  const handlePuertoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPuerto(e.target.value);
  };

  return {
    olts,
    selectedOlt,
    handleOltChange,
    puertosFiltrados,
    handlePuertoChange,
    tarjetasFiltradas,
    selectedTarjeta,
    handleTarjetaChange,
  };
};
