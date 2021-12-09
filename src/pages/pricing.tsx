import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Radio } from '../components/Radio';
import { TextArea } from '../components/TextArea';
import { Container, Content } from '../styles/pages/Pricing';

export default function pricing() {
  return (
    <Container>
      <Header />

      <Content onSubmit={data => console.log(data)}>
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

        <fieldset>
          <legend>SOBRE O PROJETO</legend>

          <Radio
            name="type"
            title="Qual o tipo de projeto?"
            options={[
              { label: 'Apenas logo', value: 'logo' },
              { label: 'Redesing', value: 'redesing' },
              { label: 'Identidade visual', value: 'visual_identity' },
            ]}
          />

          <Radio
            name="target"
            title="O projeto é para..."
            options={[
              { label: 'Uma empresa', value: 'company' },
              { label: 'Um produto', value: 'product' },
              { label: 'Uma marca', value: 'brand' },
            ]}
          />

          <Radio
            name="date"
            title="Para quando precisa desse projeto?"
            options={[
              { label: '15 dias', value: '15' },
              { label: 'Um mês', value: '30' },
              { label: 'Dois meses', value: '60' },
              { label: 'Urgente', value: '10' },
            ]}
          />

          <Radio
            name="budget"
            title="Qual o seu orçamento para este projeto?"
            options={[
              { label: 'Menos de R$1.800', value: '1800' },
              { label: 'Entre R$7.500 - R$10.000', value: '10.000' },
              { label: 'Dinheiro não é problema!', value: '20.000' },
            ]}
          />

          <Input
            name="company"
            title="Qual o nome da Empresa/Produto?"
            placeholder="Praise de Frutas"
          />

          <Input
            name="media"
            title="Tem site ou alguma rede social?"
            placeholder="Instagram: @frutasfrescas | Twitter @frutasfrescas"
          />

          <Input
            name="product"
            title="O que ele oferece ou qual o tipo de produto?"
            placeholder="Frutas frescas"
          />

          <TextArea
            title="Fale um pouco mais do seu projeto"
            name="about"
            placeholder="É uma empresa que corta e entrega frutas em domicilio de graça."
          />
        </fieldset>

        <fieldset>
          <legend>PARA A ENTREGA...</legend>

          <Radio
            name="brand_manual"
            title="Este projeto precisa do manual da marca?"
            options={[
              { label: 'Sim', value: 'yes' },
              { label: 'Não', value: 'no' },
            ]}
          />

          <TextArea
            name="material"
            title="Materiais e itens"
            subtitle="*Medidas e formatos precisarão ser consultados."
            placeholder="Cartão de visita, materiais para redes sociais, outdoor..."
          />
        </fieldset>

        <button type="submit">subimitar</button>
      </Content>
    </Container>
  );
}
