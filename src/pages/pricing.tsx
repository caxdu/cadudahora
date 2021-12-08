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

          <Input
            name="name"
            title="Qual o seu nome?"
            placeholder="Luís Felipe"
            type="text"
          />

          <Input
            name="whatsapp"
            title="Seu número de telefone (WhatsApp):"
            subtitle="Em caso de urgência, irei entrar em contato com você por aqui"
            placeholder="(99) 9.9999-9999"
            type="text"
          />

          <Input
            name="email"
            title="Me diz seu melhor e-mail:"
            subtitle="Normalmente eu vou entrar em contato com você por aqui."
            type="email"
            placeholder="filipe@email.com"
          />

          <Input
            name="job"
            title="Atualmente, qual sua função dentro dessa empresa?"
            placeholder="Diretor de Tecnologia"
          />
        </fieldset>
      </Content>
    </Container>
  );
}
