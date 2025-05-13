import { PageContainer, ContainerMain, Encabezado } from "./Redes.styled";
import { Breadcrumb } from "../../../../components/UI/BreadCrumb";

export function Redes() {
  return (
     <PageContainer>
         <ContainerMain>
           <Encabezado>
             <label>
               {" "}
               <h1 style={{ margin: 0, fontSize: "24px", fontWeight: 600 }}>
                Gestión de Redes
               </h1>
             </label>
   
             <Breadcrumb />
           </Encabezado>
         </ContainerMain>
       </PageContainer>
  )
}
