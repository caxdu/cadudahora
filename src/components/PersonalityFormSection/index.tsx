import { Container, PersonalityButton } from './styles';

interface PersonalityFormSectionProps {
  personalities: string[];
  togglePersonality: (personality: string) => void;
}

export function PersonalityFormSection({
  personalities,
  togglePersonality,
}: PersonalityFormSectionProps) {
  return (
    <Container>
      <p>
        Se sua empresa fosse uma pessoa, como você a descreveria? <span>*</span>
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
    </Container>
  );
}
