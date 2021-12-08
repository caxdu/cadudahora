import { Container } from './styles';

export function Input() {
  return (
    <Container>
      <p>
        Qual o seu nome?<span>*</span>
      </p>
      <input type="text" />
    </Container>
  );
}
