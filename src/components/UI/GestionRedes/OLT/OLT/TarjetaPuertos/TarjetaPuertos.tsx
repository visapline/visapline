import React from "react";
import styled from "styled-components";

type Puerto = {
  numero: number;
  estado: "verde" | "rojo" | "desconocido";
};

type TarjetaPuertosProps = {
  tarjeta: string;
  tipo: string;
  estado: string;
  puertos: Puerto[];
};

const CardContainer = styled.div`
  width: 120px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Header = styled.div`
  padding: 10px;
  background-color: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  text-align: center;
`;

const TituloTarjeta = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 4px;
`;

const Subtitulo = styled.div`
  font-size: 0.7rem;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const EstadoIndicator = styled.span<{ estado: string }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ estado }) => 
    estado === 'activo' ? '#22c55e' : 
    estado === 'inactivo' ? '#ef4444' : '#9ca3af'};
`;

const ListaPuertos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  padding: 12px;
  background-color: #f8fafc;
`;

const PuertoItem = styled.div<{ estado: "verde" | "rojo" | "desconocido" }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ estado }) =>
    estado === "verde" ? "#22c55e" : 
    estado === "rojo" ? "#ef4444" : "#9ca3af"};
  color: white;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TarjetaPuertos: React.FC<TarjetaPuertosProps> = ({
  tarjeta,
  tipo,
  estado,
  puertos,
}) => {
  return (
    <CardContainer>
      <Header>
        <TituloTarjeta>Tarjeta {tarjeta}</TituloTarjeta>
        <Subtitulo>
          <EstadoIndicator estado={estado.toLowerCase()} />
          {tipo} • {estado}
        </Subtitulo>
      </Header>
      <ListaPuertos>
        {puertos.map((puerto) => (
          <PuertoItem
            key={puerto.numero}
            estado={puerto.estado}
            title={`Puerto ${puerto.numero} (${puerto.estado})`}
          >
            {puerto.numero}
          </PuertoItem>
        ))}
      </ListaPuertos>
    </CardContainer>
  );
};

export const ContenedorTarjetas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;
`;