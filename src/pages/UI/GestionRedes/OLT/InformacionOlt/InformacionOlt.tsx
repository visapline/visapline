import {
  PageContainer,
  ContainerMain,
  Encabezado,
  Main,
  SectionOne,
  ContenedorForm,
  FormTitle,
  CheckboxContainer,
  FormRow,
  ContenedorconsultasOlt,
} from "./InformacionOlt.styled";
import { Breadcrumb } from "../../../../../components/UI/BreadCrumb";
import {
  OltSelect,
  PuertoSelect,
  TarjetaSelect,
  EstadoCheckbox,
  ConsultaButton,
} from "../../../../../components/UI/GestionRedes/OLT/InformacionOlt";
import { InformacionOltLogic } from "./InformacionOlt.logic";

export function InformacionOlt() {
  const {
    olts,
    selectedOlt,
    handleOltChange,
    puertosFiltrados,
    handlePuertoChange,
    tarjetasFiltradas,
    selectedTarjeta,
    handleTarjetaChange,
  } = InformacionOltLogic();

  return (
    <PageContainer>
      <ContainerMain>
        <Encabezado>
          <label>
            <h1 style={{ margin: 0, fontSize: "24px", fontWeight: 600 }}>
              Gestión de la OLT
            </h1>
          </label>
          <Breadcrumb />
        </Encabezado>
        <Main>
          <SectionOne>
            <ContenedorForm>
              <ContenedorconsultasOlt>
                <FormTitle>Método De Consulta</FormTitle>

                <CheckboxContainer>
                  <EstadoCheckbox />
                </CheckboxContainer>

                <FormRow>
                  <OltSelect options={olts} onChange={handleOltChange} />
                  <TarjetaSelect
                    options={tarjetasFiltradas}
                    onChange={handleTarjetaChange}
                  />
                  <PuertoSelect
                    options={puertosFiltrados}
                    onChange={handlePuertoChange}
                  />
                  <ConsultaButton />
                </FormRow>
              </ContenedorconsultasOlt>
            </ContenedorForm>
          </SectionOne>
        </Main>
      </ContainerMain>
    </PageContainer>
  );
}
