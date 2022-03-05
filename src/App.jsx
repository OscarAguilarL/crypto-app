import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Formulario } from './components/Formulario';
import imgCrypto from './img/imagen-criptos.png';
import { Resultado } from './components/Resultado';
import { Spinner } from './components/Spinner';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        setLoading(true);
        setResultado({});
        const { moneda, criptoMoneda } = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;

        const resp = await fetch(url);
        const data = await resp.json();

        setResultado(data.DISPLAY[criptoMoneda][moneda]);
        setLoading(false);
      };
      cotizarCripto();
    }
  }, [monedas]);

  return (
    <Container>
      <Imagen src={imgCrypto} alt="Imagenes de criptomonedas" />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario setMonedas={setMonedas} />
        {loading && <Spinner />}
        {!!resultado.PRICE && <Resultado resultado={resultado} />}
      </div>
    </Container>
  );
}

export default App;
