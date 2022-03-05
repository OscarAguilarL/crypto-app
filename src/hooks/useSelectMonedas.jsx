import styled from '@emotion/styled';

const Label = styled.label`
  color: #fff;
`;

export const useSelectMonedas = (label, opciones) => {
  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <select name="" id="">
        <option value="">Seleccione una opción</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}{' '}
          </option>
        ))}
      </select>
    </>
  );

  return [SelectMonedas];
};
