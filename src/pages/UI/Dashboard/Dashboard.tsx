import {
  PageContainer,
  ContainerMain,
  Encabezado,
  Main,
  SectionOne,
  ContainerGraficos,
  ContainerInfoGeneral,
  ContainerGraficosContrato,
  ContainerGraficosServicios,
} from "./Dashboard.styled.ts";
import { Breadcrumb } from "../../../components/UI/BreadCrumb";
import { GraficaContrato, GraficaServicios, Informacion } from "../../../components/UI/Dashboard/index.ts";

export function Dashboard() {
  return (
    <PageContainer>
      <ContainerMain>
        <Encabezado>
          <label>
            {" "}
            <h1 style={{ margin: 0, fontSize: "24px", fontWeight: 600 }}>
              Dashboard
            </h1>
          </label>

          <Breadcrumb />
        </Encabezado>

        <Main>
          <SectionOne>
            <ContainerGraficos>
              <ContainerGraficosContrato>
              
                <GraficaContrato />
              </ContainerGraficosContrato>
              <ContainerGraficosServicios>
                <GraficaServicios />
              </ContainerGraficosServicios>
            </ContainerGraficos>
            <ContainerInfoGeneral>
              <Informacion />
            </ContainerInfoGeneral>
          </SectionOne>
        </Main>
      </ContainerMain>
    </PageContainer>
  );
}
