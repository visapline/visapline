import styled from "styled-components";
import { TextField, Button, FormControl } from "@mui/material";

export const FormContainer = styled.div`
  width: 500px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0f172a;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: white;

  h1 {
    margin-bottom: 20px;
    font-size: 28px;
  }

  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    height: 90%;
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 20px;

    .MuiOutlinedInput-root {
      color: white;
      fieldset {
        border-color: #3b82f6;
      }
      &:hover fieldset {
        border-color: #2563eb;
      }
    }

    .MuiInputLabel-root {
      color: #94a3b8;
    }

    .MuiFormHelperText-root {
      color: #f87171;
    }
  }
`;

export const StyledFormControl = styled(FormControl)`
  && {
    margin-bottom: 10px;
    width: 100%;

    .MuiOutlinedInput-root {
      color: white;
      fieldset {
        border-color: #3b82f6;
      }
      &:hover fieldset {
        border-color: #2563eb;
      }
    }

    .MuiInputLabel-root {
      color: #94a3b8;
    }

    .MuiFormHelperText-root {
      color: #f87171;
    }

    .MuiIconButton-root {
      color: #94a3b8;
    }
  }
`;

export const StyledButton = styled(Button)`
  && {
    margin-top: 10px;
    padding: 12px 15px;
    background-color: #3b82f6;
    color: white;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #2563eb;
    }
  }
`;

export const FormFooter = styled.p`
  margin-top: 30px;
  font-size: 14px;

  a {
    color: #3b82f6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const HeaderForm = styled.div`
  background: linear-gradient(135deg,rgb(78, 100, 168) 0%,rgb(6, 77, 148) 100%);
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 20px 0;

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -30px;
    left: -30px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgba(0, 123, 255, 0.1);
  }

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    position: relative; /* Asegura que la imagen esté por encima de los pseudo-elementos */
    z-index: 1;
  }
`;
