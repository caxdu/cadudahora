import { useField } from '@unform/core';
import {
  TextareaHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  title: string;
  subtitle?: string;
  isRequired?: boolean;
}

export function TextArea({
  name,
  title,
  subtitle,
  isRequired = true,
  ...rest
}: TextAreaProps) {
  const { registerField, fieldName } = useField(name);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container isFilled={isFilled}>
      <p>
        {title}
        {isRequired && <span>*</span>}
      </p>

      <span>{subtitle}</span>

      <textarea ref={inputRef} name={name} onBlur={handleInputBlur} {...rest} />
    </Container>
  );
}
