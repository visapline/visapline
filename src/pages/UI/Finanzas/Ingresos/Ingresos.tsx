import { PageContainer, ContainerMain, Encabezado } from "./Ingresos.styled";
import { Breadcrumb } from "../../../../components/UI/BreadCrumb";
export function Ingresos() {
  return (
  <PageContainer>
       <ContainerMain>
         <Encabezado>
           <label>
             {" "}
             <h1 style={{ margin: 0, fontSize: "24px", fontWeight: 600 }}>
               Finanzas
             </h1>
           </label>
 
           <Breadcrumb />
         </Encabezado>
       </ContainerMain>
     </PageContainer>
  )
}   