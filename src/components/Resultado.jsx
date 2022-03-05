import styled from '@emotion/styled';

export const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCTHOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <div>
      <p>
        El precio es de: <span>{PRICE}</span>
      </p>
      <p>
        El precio más alto del día: <span>{HIGHDAY}</span>
      </p>
      <p>
        El precio más bajo del día: <span>{LOWDAY}</span>
      </p>
      <p>
        Variación en las últimas 24 horas: <span>{CHANGEPCTHOUR}</span>
      </p>
      <p>
        Última actualización: <span>{LASTUPDATE}</span>
      </p>
    </div>
  );
};
