import { useEffect, useState } from "react";
import {
  PageContainer,
  ContainerMain,
  Encabezado,
  Main,
  HeaderGraficaOlt,
  SectionTarjetas,
  ContenedorTarjetas,
} from "./Olt.styled";
import { Breadcrumb } from "../../../../../components/UI/BreadCrumb";
import { TarjetaPuertos } from "../../../../../components/UI/GestionRedes/OLT/OLT";

type Puerto = {
  numero: number;
  estado: "verde" | "rojo" | "desconocido";
};

type Tarjeta = {
  tarjeta: string;
  tipo: string;
  estado: string;
  puertos: Puerto[];
};

export function Olt() {
  const [tarjetas, setTarjetas] = useState<Tarjeta[]>([]);

  useEffect(() => {
    // Simulación de carga de datos (mock)
    const mockData: Tarjeta[] = [
      {
        tarjeta: "1",
        tipo: "GFBT",
        estado: "INSERVICE",
        puertos: Array.from({ length: 16 }, (_, i) => ({
          numero: i + 1,
          estado: i % 3 === 0 ? "rojo" : "verde", // alterna algunos en rojo
        })),
      },
      {
        tarjeta: "2",
        tipo: "GFBT",
        estado: "INSERVICE",
        puertos: Array.from({ length: 16 }, (_, i) => ({
          numero: i + 1,
          estado: "verde",
        })),
      },
      {
        tarjeta: "3",
        tipo: "GFBT",
        estado: "INSERVICE",
        puertos: Array.from({ length: 16 }, (_, i) => ({
          numero: i + 1,
          estado: "verde",
        })),
      },
      {
        tarjeta: "4",
        tipo: "GFBT",
        estado: "INSERVICE",
        puertos: Array.from({ length: 16 }, (_, i) => ({
          numero: i + 1,
          estado: "verde",
        })),
      },
      {
        tarjeta: "5",
        tipo: "GFBT",
        estado: "INSERVICE",
        puertos: Array.from({ length: 16 }, (_, i) => ({
          numero: i + 1,
          estado: "verde",
        })),
      },
      {
        tarjeta: "6",
        tipo: "GFBT",
        estado: "INSERVICE",
        puertos: Array.from({ length: 16 }, (_, i) => ({
          numero: i + 1,
          estado: "verde",
        })),
      },
      {
        tarjeta: "7",
        tipo: "GFBT",
        estado: "INSERVICE",
        puertos: Array.from({ length: 16 }, (_, i) => ({
          numero: i + 1,
          estado: "verde",
        })),
      },
      {
        tarjeta: "8",
        tipo: "GFBT",
        estado: "INSERVICE",
        puertos: Array.from({ length: 16 }, (_, i) => ({
          numero: i + 1,
          estado: "verde",
        })),
      },
      {
        tarjeta: "9",
        tipo: "GFBT",
        estado: "INSERVICE",
        puertos: Array.from({ length: 16 }, (_, i) => ({
          numero: i + 1,
          estado: "verde",
        })),
      },
      {
        tarjeta: "12",
        tipo: "GFBT",
        estado: "INSERVICE",
        puertos: Array.from({ length: 16 }, (_, i) => ({
          numero: i + 1,
          estado: "verde",
        })),
      },
      {
        tarjeta: "13",
        tipo: "GFBT",
        estado: "INSERVICE",
        puertos: Array.from({ length: 16 }, (_, i) => ({
          numero: i + 1,
          estado: "verde",
        })),
      },
      {
        tarjeta: "14",
        tipo: "GFBT",
        estado: "INSERVICE",
        puertos: Array.from({ length: 16 }, (_, i) => ({
          numero: i + 1,
          estado: "verde",
        })),
      },
      {
        tarjeta: "15",
        tipo: "GFBT",
        estado: "INSERVICE",
        puertos: Array.from({ length: 16 }, (_, i) => ({
          numero: i + 1,
          estado: "verde",
        })),
      },
      {
        tarjeta: "16",
        tipo: "GFBT",
        estado: "INSERVICE",
        puertos: Array.from({ length: 16 }, (_, i) => ({
          numero: i + 1,
          estado: "verde",
        })),
      },
      {
        tarjeta: "17",
        tipo: "GFBT",
        estado: "INSERVICE",
        puertos: Array.from({ length: 16 }, (_, i) => ({
          numero: i + 1,
          estado: "verde",
        })),
      },
    ];

    setTarjetas(mockData);
  }, []);

  return (
    <PageContainer>
      <ContainerMain>
        <Encabezado>
          <label>
            <h1 style={{ margin: 0, fontSize: "24px", fontWeight: 600 }}>
              Gestión de OLT
            </h1>
          </label>
          <Breadcrumb />
        </Encabezado>

        <Main>
          <HeaderGraficaOlt>
            <h1 style={{ fontSize: "24px", fontWeight: 600 }}>Gráfica OLT</h1>
          </HeaderGraficaOlt>

          <SectionTarjetas>
            <ContenedorTarjetas>
              {tarjetas.map((tarjeta) => (
                <TarjetaPuertos
                  key={tarjeta.tarjeta}
                  tarjeta={tarjeta.tarjeta}
                  tipo={tarjeta.tipo}
                  estado={tarjeta.estado}
                  puertos={tarjeta.puertos}
                />
              ))}
            </ContenedorTarjetas>
          </SectionTarjetas>
        </Main>
      </ContainerMain>
    </PageContainer>
  );
}
