import { PageContainer, ContainerMain, Encabezado } from "./Contrato.styled";
import { Breadcrumb } from "../../../../components/UI/BreadCrumb";
export function Contrato() {
  return (
    <PageContainer>
      <ContainerMain>
        <Encabezado>
          <label>
            {" "}
            <h1 style={{ margin: 0, fontSize: "24px", fontWeight: 600 }}>
              Vistas Avanzadas
            </h1>
          </label>

          <Breadcrumb />
        </Encabezado>
      </ContainerMain>
    </PageContainer>
  );
}
