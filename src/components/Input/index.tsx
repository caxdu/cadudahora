import { InputHTMLAttributes, useCallback, useRef, useState } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title: string;
  subtitle?: string;
  isRequired?: boolean;
}

export function Input({
  name,
  title,
  subtitle,
  isRequired = true,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFilled={isFilled}>
      <p>
        {title}
        {isRequired && <span>*</span>}
      </p>
      {subtitle && <span>{subtitle}</span>}
      <input ref={inputRef} name={name} onBlur={handleInputBlur} {...rest} />
    </Container>
  );
}
