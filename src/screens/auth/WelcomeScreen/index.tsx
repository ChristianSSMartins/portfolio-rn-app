import { Container, ContentContainer, FormContainer, Title } from "./styles";

import { InputComponent } from "@components/main/InputComponent";

export function Welcome() {
  return (
    <Container>
      <ContentContainer>
        <Title>React Native Portfolio</Title>
        <FormContainer>
          {/* <InputComponent />
          <InputComponent /> */}
        </FormContainer>
      </ContentContainer>
    </Container>
  );
}
