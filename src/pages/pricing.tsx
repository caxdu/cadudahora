import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Container, Content } from '../styles/pages/Pricing';

export default function pricing() {
  return (
    <Container>
      <Header />

      <Content onSubmit={() => console.log('submitou')}>
        <h1>&lt; Quer um orçamento?</h1>
        <h2>ACEITA UM SUCO ENQUANTO CONVERSAMOS?</h2>

        <fieldset>
          <legend>SOBRE VOCÊ</legend>

          <Input />
          <Input />
          <Input />
          <Input />
        </fieldset>
      </Content>
    </Container>
  );
}
