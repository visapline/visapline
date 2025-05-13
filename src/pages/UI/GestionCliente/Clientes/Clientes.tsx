import { PageContainer, ContainerMain, Encabezado } from "./Clientes.styled";
import { Breadcrumb } from "../../../../components/UI/BreadCrumb";
export function Clientes() {
  return (
  <PageContainer>
       <ContainerMain>
         <Encabezado>
           <label>
             {" "}
             <h1 style={{ margin: 0, fontSize: "24px", fontWeight: 600 }}>
               Gestión del Cliente
             </h1>
           </label>
 
           <Breadcrumb />
         </Encabezado>
       </ContainerMain>
     </PageContainer>
  )
}