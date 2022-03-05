import styled from '@emotion/styled';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
  height: 120px;
`;

export const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCTHOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="criptomoneda"
      />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          El precio más alto del día: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          El precio más bajo del día: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variación en las últimas 24 horas: <span>{CHANGEPCTHOUR}</span>
        </Texto>
        <Texto>
          Última actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};
