import {PageContainer, ContainerMain, Encabezado} from "./Dashboard.styled.ts"
import { Breadcrumb } from "../../../components/UI/BreadCrumb";

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
        </ContainerMain>
      </PageContainer>
  )
}