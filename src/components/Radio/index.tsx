/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-return-assign */
import { useField } from '@unform/core';
import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { Container } from './styles';

type Option = {
  value: string;
  label: string;
};

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title: string;
  options: Option[];
  isRequired?: boolean;
}

export function Radio({ name, title, options, isRequired = true }: RadioProps) {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField } = useField(name);

  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue(refs: HTMLInputElement[]) {
        const checked = refs.find(ref => ref.checked);

        return checked ? checked.value : null;
      },
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      <p>
        {title}
        {isRequired && <span>*</span>}
      </p>

      {options.map((option, index) => (
        <label
          key={option.value}
          className={selected === index ? 'selected' : ''}
        >
          <input
            ref={elRef => (inputRefs.current[index] = elRef)}
            type="radio"
            name={name}
            id={option.value}
            value={option.value}
            onChange={() => setSelected(index)}
          />
          {option.label}
        </label>
      ))}
    </Container>
  );
}
