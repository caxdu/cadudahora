import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { Container } from './styles';

export function PricingSection() {
  const { push } = useRouter();

  const handleSeePricing = useCallback(() => {
    push('/pricing');
  }, [push]);

  return (
    <Container id="pricing">
      <h1>
        <strong>&lt;</strong> Quer um Orçamento?
      </h1>

      <button type="button" onClick={handleSeePricing}>
        FALA COMIGO :)
      </button>
    </Container>
  );
}
