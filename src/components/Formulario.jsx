import { useEffect } from 'react';
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
  margin-top: 15px;

  &:hover {
    background-color: #7a7dfe;
  }
`;

export const Formulario = () => {
  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas);

  useEffect(() => {
    const consultarApi = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
      const resp = await fetch(url);
      const { Data } = await resp.json();
      console.log(Data);
    };
    consultarApi();
  }, []);

  return (
    <form>
      <SelectMonedas />
      {moneda}
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};
