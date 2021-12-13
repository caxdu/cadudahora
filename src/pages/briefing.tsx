import { useCallback, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Radio } from '../components/Radio';
import { TextArea } from '../components/TextArea';
import { Content, PersonalityButton } from '../styles/pages/Briefing';

export default function Briefing() {
  const [personalities, setPersonalities] = useState<string[]>([]);

  const togglePersonality = useCallback(
    (personality: string) => {
      if (personalities.includes(personality)) {
        setPersonalities(prevPersonalities =>
          prevPersonalities.filter(p => p !== personality),
        );

        return;
      }

      setPersonalities(prevPersonalities => [
        ...prevPersonalities,
        personality,
      ]);
    },
    [personalities],
  );

  return (
    <>
      <Header />

      <Content onSubmit={data => console.log(data)}>
        <h1>&lt; Vamos realizar o teu projeto?</h1>
        <h2>AGORA É A HORA DE FAZER O PROJETO MAIS DAHORA!</h2>

        <fieldset>
          <legend>
            ANTES DE INICIARMOS, QUE TAL ME CONTAR UM POUCO MAIS SOBRE VOCÊ?
          </legend>

          <Input
            name="name"
            title="Qual o seu nome?"
            placeholder="Luís Felipe"
            type="text"
          />

          <Input
            name="phone"
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

          <TextArea
            name="reasons"
            title="Quais os motivos que te levaram a abrir essa empresa?"
            placeholder="Motivos, causas, missões... Tudo o que te fez criar a empresa."
          />

          <TextArea
            name="company_name"
            title="Por que a empresa tem esse nome? O que ele significa pra você?"
            placeholder="Pode contar tudo, não precisa poupar palavras!"
          />

          <TextArea
            name="company_future"
            title="A empresa pode ser outra coisa no futuro ou atuar em outro segmento? Se sim, o que seria?"
            placeholder="Talvez no futuro você queira dividir a sua empresa em algumas áreas."
          />
        </fieldset>

        <fieldset>
          <legend>
            ACHEI MUITO BOA A SUA VISÃO DA EMPRESA! AGORA EU GOSTARIA DE
            <br />
            CONHECER ELA MAIS AFUNDO (DE FORMA MAIS TÉCNICA)!
          </legend>

          <Input
            name="company_about"
            title="Defina de forma resumida do que se trata a sua empresa."
            placeholder="Venda de fruta pela internet"
            type="text"
          />

          <Radio
            name="company_moment"
            title="Qual o momento atual da empresa?"
            options={[
              { label: 'Nascimento', value: 'starting' },
              { label: 'Troca de nome', value: 'name changing' },
              { label: 'Redesing / Revitalização', value: 'redesign' },
              { label: 'Fusão', value: 'fusion' },
              { label: 'Outro', value: 'other' },
            ]}
          />

          <Input
            name="company_services"
            title="Quais produtos ou serviços sua empresa oferece?"
            placeholder="Com o que a sua empresa trabalha?"
            type="text"
          />

          <Input
            name="company_special"
            title="O que faz sua empresa ser especial?"
            placeholder="Um doce, um presente, o atendimento..."
            type="text"
          />

          <Input
            name="slogan"
            title="Sua empresa tem algum slogan?"
            placeholder="Isso é o que fica na cabeça das pessoas!"
            type="text"
            isRequired={false}
          />

          <TextArea
            name="company_competition"
            title="Sua empresa tem concorrentes? Quem são? Fale um pouco sobre eles se achar necessário."
            placeholder="Coloque nomes e links se puder :)"
          />

          <Input
            name="company_competition_exclusivity"
            title="Seus concorrentes oferecem algo que sua empresa não oferece?"
            placeholder="Pode ser até um doce na entrada."
            type="text"
          />

          <Input
            name="company_missions"
            title="Quais missões, visões e valores da sua empresa?"
            placeholder="Por que a sua empresa existe?"
            type="text"
            isRequired={false}
          />
        </fieldset>

        <fieldset>
          <legend>AGORA VAMOS FALAR UM POUCO SOBRE SEUS CLIENTES!</legend>

          <Input
            name="client_age"
            title="Qual a classe social e faixa etária?"
            placeholder="Classe A, de 15 a 20 anos."
          />

          <Radio
            name="client_sex"
            title="Qual o gênero do seu público?"
            options={[
              { label: 'Masculino', value: 'male' },
              { label: 'Feminino', value: 'female' },
              { label: 'Ambos os gêneros', value: 'both genders' },
            ]}
          />

          <Input
            name="client_definition"
            title="Como você gostaria que os clientes descrevessem sua empresa?"
            placeholder="Uma marca amável que pensa nos mínimos detalhes."
          />

          <Input
            name="client_find"
            title="De que forma você espera que seu cliente encontre sua empresa?"
            placeholder="Redes sociais como Instagram."
          />
        </fieldset>

        <fieldset>
          <legend>POR FIM, SOBRE A PERSONALIDADE DA SUA MARCA!</legend>

          <section>
            <p>
              Se sua empresa fosse uma pessoa, como você a descreveria?{' '}
              <span>*</span>
            </p>

            <div>
              <PersonalityButton
                onClick={() => togglePersonality('ALEGRE')}
                active={personalities.includes('ALEGRE')}
                type="button"
              >
                ALEGRE
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('ANTIGA')}
                active={personalities.includes('ANTIGA')}
                type="button"
              >
                ANTIGA
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('ARTÍSTICA')}
                active={personalities.includes('ARTÍSTICA')}
                type="button"
              >
                ARTÍSTICA
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('AVENTUREIRA')}
                active={personalities.includes('AVENTUREIRA')}
                type="button"
              >
                AVENTUREIRA
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('BRINCALHONA')}
                active={personalities.includes('BRINCALHONA')}
                type="button"
              >
                BRINCALHONA
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('CONFIÁVEL')}
                active={personalities.includes('CONFIÁVEL')}
                type="button"
              >
                CONFIÁVEL
              </PersonalityButton>
            </div>

            <div>
              <PersonalityButton
                onClick={() => togglePersonality('CRIATIVA')}
                active={personalities.includes('CRIATIVA')}
                type="button"
              >
                CRIATIVA
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('DEDICADA')}
                active={personalities.includes('DEDICADA')}
                type="button"
              >
                DEDICADA
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('DIFERENTE')}
                active={personalities.includes('DIFERENTE')}
                type="button"
              >
                DIFERENTE
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('DIVERTIDA')}
                active={personalities.includes('DIVERTIDA')}
                type="button"
              >
                DIVERTIDA
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('ELEGANTE')}
                active={personalities.includes('ELEGANTE')}
                type="button"
              >
                ELEGANTE
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('EMOCIONAL')}
                active={personalities.includes('EMOCIONAL')}
                type="button"
              >
                EMOCIONAL
              </PersonalityButton>
            </div>

            <div>
              <PersonalityButton
                onClick={() => togglePersonality('ENERGÉTICA')}
                active={personalities.includes('ENERGÉTICA')}
                type="button"
              >
                ENERGÉTICA
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('EXCLUSIVA')}
                active={personalities.includes('EXCLUSIVA')}
                type="button"
              >
                EXCLUSIVA
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('EXTROVERTIDA')}
                active={personalities.includes('EXTROVERTIDA')}
                type="button"
              >
                EXTROVERTIDA
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('FUTURISTA')}
                active={personalities.includes('FUTURISTA')}
                type="button"
              >
                FUTURISTA
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('MADURA')}
                active={personalities.includes('MADURA')}
                type="button"
              >
                MADURA
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('NERD')}
                active={personalities.includes('NERD')}
                type="button"
              >
                NERD
              </PersonalityButton>
            </div>

            <div>
              <PersonalityButton
                onClick={() => togglePersonality('MODERNA')}
                active={personalities.includes('MODERNA')}
                type="button"
              >
                MODERNA
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('OUSADA')}
                active={personalities.includes('OUSADA')}
                type="button"
              >
                OUSADA
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('REBELDE')}
                active={personalities.includes('REBELDE')}
                type="button"
              >
                REBELDE
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('ROMÂNTICA')}
                active={personalities.includes('ROMÂNTICA')}
                type="button"
              >
                ROMÂNTICA
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('SÉRIA')}
                active={personalities.includes('SÉRIA')}
                type="button"
              >
                SÉRIA
              </PersonalityButton>

              <PersonalityButton
                onClick={() => togglePersonality('TRADICIONAL')}
                active={personalities.includes('TRADICIONAL')}
                type="button"
              >
                TRADICIONAL
              </PersonalityButton>
            </div>
          </section>

          <Input
            name="additional_characteristics"
            title="Se necessário, adicione mais algumas características."
            placeholder="Amada, ousada e moderna."
            isRequired={false}
          />

          <Input
            name="strongest_characteristics"
            title="Se necessário, adicione mais algumas características."
            placeholder="Séria, Nerd e Tradicional."
          />

          <Input
            name="color"
            title="Há alguma cor que vc queira na sua marca?"
            placeholder="Azul e roxo."
            isRequired={false}
          />

          <Input
            name="company_extra"
            title="Fique a vontade para dizer mais sobre a sua empresa ou dar considerações finais."
            placeholder="Obrigado por existir. :)"
            isRequired={false}
          />
        </fieldset>

        <button type="submit">ENVIAR BRIEFING</button>
      </Content>

      <Footer />
    </>
  );
}
