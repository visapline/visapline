import {
  FormContainer,
  StyledTextField,
  StyledFormControl,
  StyledButton,
  FormFooter,
  HeaderForm,
} from "./LoginForm.styled";
import { useLoginForm } from "./useLoginForm";
import {
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import imgIcon from "../../../assets/cabecera46.png";

export function LoginForm() {
  const {
    formData,
    errors,
    showPassword,
    handleChange,
    handleSubmit,
    handleClickShowPassword,
    handleMouseDownPassword,
    isSubmitting,
  } = useLoginForm();

  return (
    <FormContainer>
      <HeaderForm>
        <img src={imgIcon} alt="" />
      </HeaderForm>

      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <StyledTextField
          name="usuario"
          label="Usuario Asignado"
          variant="outlined"
          fullWidth
          value={formData.usuario}
          onChange={handleChange}
          error={errors.usuario}
          disabled={isSubmitting}
          helperText={errors.usuario ? "Este campo es requerido" : " "}
        />

        <StyledFormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Contraseña Asignada
          </InputLabel>
          <OutlinedInput
            name="contrasena"
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={formData.contrasena}
            onChange={handleChange}
            error={errors.contrasena}
            disabled={isSubmitting}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Contraseña Asignada"
          />
          {errors.contrasena && (
            <span
              style={{
                color: "#f87171",
                fontSize: "0.75rem",
                marginTop: "3px",
              }}
            >
              Este campo es requerido
            </span>
          )}
        </StyledFormControl>

        <StyledButton
          type="submit"
          variant="contained"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? "Iniciando..." : "Iniciar Sesión"}
        </StyledButton>
      </form>

      <FormFooter>
        ¿Eres Socio o Funcionario? <a href="#">Obtener Acceso</a>
      </FormFooter>
    </FormContainer>
  );
}
