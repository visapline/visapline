import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableVirtuoso, TableComponents } from "react-virtuoso";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { Container, StyledVirtuoso } from "./TablaPuertos.styled";

interface Data {
  estado: string;
  tarjeta: string; // minúscula
  puerto: string;
  id: number;
  nombre: string;
  usuario: string;
  rx: string;
  tx: string;
  serial_db: string;
  serv: string;
  cont: string;
  barrid: string;
}

interface ColumnData {
  dataKey: keyof Data;
  label: string;
  numeric?: boolean;
  width?: number;
}

const columns: ColumnData[] = [
  { width: 100, label: "ESTADO", dataKey: "estado" },
  { width: 50, label: "T", dataKey: "tarjeta", numeric: true },
  { width: 50, label: "P", dataKey: "puerto", numeric: true },
  { width: 50, label: "ID", dataKey: "id", numeric: true },
  { width: 200, label: "NOMBRE", dataKey: "nombre" },
  { width: 120, label: "IDENTIFICACION", dataKey: "usuario" },
  { width: 80, label: "RX", dataKey: "rx", numeric: true },
  { width: 80, label: "TX", dataKey: "tx", numeric: true },
  { width: 150, label: "Serial_DB", dataKey: "serial_db" },
  { width: 100, label: "SERV", dataKey: "serv" },
  { width: 100, label: "CONT", dataKey: "cont" },
  { width: 150, label: "BARRIO", dataKey: "barrid" },
];

const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Container} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};





interface TablaPuertosProps {
  data: Data[];
  loading: boolean; // nuevo prop
}
export function TablaPuertos({ data, loading }: TablaPuertosProps) {
  const totalColumns = columns.length;

  // Para spinner o mensaje renderizamos solo 1 fila
  const items = loading || data.length === 0 ? [{} as Data] : data;

  function fixedHeaderContent() {
    return (
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            variant="head"
            align={column.numeric ? "right" : "left"}
            style={{ width: column.width }}
            sx={{
              backgroundColor: "background.paper",
              fontWeight: "bold",
              fontSize: "0.875rem",
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    );
  }

  function rowContent(_index: number, row: Data) {
    if (loading) {
      // Renderizar spinner centrado
      return (
        <TableCell colSpan={totalColumns} align="center" sx={{ padding: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </Box>
        </TableCell>
      );
    }

    if (!loading && data.length === 0) {
      // Mensaje cuando no hay datos
      return (
        <TableCell
          colSpan={totalColumns}
          align="center"
          sx={{ fontSize: "1rem", fontWeight: "bold", padding: 2 }}
        >
          No hay datos disponibles
        </TableCell>
      );
    }

    // Renderizar fila normal con datos
    return (
      <>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            align={column.numeric ? "right" : "left"}
            sx={{
              fontSize: "0.875rem",
            }}
          >
            {row[column.dataKey]}
          </TableCell>
        ))}
      </>
    );
  }

  return (
    <Container>
      <StyledVirtuoso>
        <TableVirtuoso
          data={items}
          components={VirtuosoTableComponents}
          fixedHeaderContent={fixedHeaderContent}
          itemContent={rowContent}
          style={{ height: "100%", width: "100%" }}
        />
      </StyledVirtuoso>
    </Container>
  );
}