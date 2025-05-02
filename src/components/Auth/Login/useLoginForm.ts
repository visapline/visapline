import { useState } from "react";
import { Auth } from "../../../api/auth";
import { useAuth } from "../../../utils";

export const useLoginForm = () => {
  const [formData, setFormData] = useState({
    usuario: "",
    contrasena: "",
  });
  const [errors, setErrors] = useState({
    usuario: false,
    contrasena: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const AuthController = new Auth();
  const { login } = useAuth();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      usuario: formData.usuario.trim() === "",
      contrasena: formData.contrasena.trim() === "",
    };

    setErrors(newErrors);
    return !newErrors.usuario && !newErrors.contrasena;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await AuthController.login(formData);
        const { token } = response;
        await AuthController.setAccessToken(token);
        await login(token);
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
      } finally {
        setIsSubmitting(false);
      } 
    }

    setIsSubmitting(true);
  };

  return {
    formData,
    errors,
    showPassword,
    handleChange,
    handleSubmit,
    handleClickShowPassword,
    handleMouseDownPassword,
    isSubmitting,
  };
};
