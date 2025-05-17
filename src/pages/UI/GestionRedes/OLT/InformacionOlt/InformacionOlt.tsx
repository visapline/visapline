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
  SectionTwo,
} from "./InformacionOlt.styled";
import { Breadcrumb } from "../../../../../components/UI/BreadCrumb";
import {
  OltSelect,
  PuertoSelect,
  TarjetaSelect,
  EstadoCheckbox,
  ConsultaButton,
  TablaPuertos,
} from "../../../../../components/UI/GestionRedes/OLT/InformacionOlt";
import { InformacionOltLogic } from "./InformacionOlt.logic";

export function InformacionOlt() {
  const {
    olts,
    selectedOlt,
    selectedPuerto,
    handleOltChange,
    puertosFiltrados,
    handlePuertoChange,
    tarjetasFiltradas,
    selectedTarjeta,
    handleTarjetaChange,
    loading,
    handleConsulta,
    datosTabla,
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
                    disabled={!selectedOlt}
                  />
                  <PuertoSelect
                    options={puertosFiltrados}
                    onChange={handlePuertoChange}
                    disabled={!selectedTarjeta}
                  />
                  <ConsultaButton
                    onClick={handleConsulta}
                    disabled={!selectedPuerto || loading}
                  />
                </FormRow>
              </ContenedorconsultasOlt>
            </ContenedorForm>
          </SectionOne>
          <SectionTwo>
            <TablaPuertos data={datosTabla} loading={loading} />
          </SectionTwo>
        </Main>
      </ContainerMain>
    </PageContainer>
  );
}
