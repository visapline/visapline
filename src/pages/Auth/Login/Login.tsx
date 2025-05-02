import { PageContainer, ImageContainer, FormContainer } from "./Login.styled";
import { LoginForm } from "../../../components/Auth";

import Img from "../../../assets/new_image_kev.jpeg";
export function Login() {
  return (
    <PageContainer>
      <ImageContainer>
        <img src={Img} alt="kev" style={{ width: "100%", height: "100%" }} />
      </ImageContainer>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </PageContainer>
  );
}
