import React from 'react';
import styled from '@emotion/styled';
import { useSelectMonedas } from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 15px ;

  &:hover {
    background-color: #7a7dfe;
  }
`;

export const Formulario = () => {
  const [state, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas);

  return (
    <form>
      <SelectMonedas />
      {state}
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};
