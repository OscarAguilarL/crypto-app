import styled from '@emotion/styled';

const Texto = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 1rem;
  font-size: 22px;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
`;

export const Error = ({ children }) => {
  return <Texto>{children}</Texto>;
};
