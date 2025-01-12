import styled from 'styled-components';

export const Contaier = styled.footer`
  height: 64px;
  display: flex;
  font-family: 'Poppins', Arial, sans-serif;
  padding: 0 32px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  text-align: center;
  border-top: 0.5px solid ${({ theme }) => theme.colors.neutral40};
`;
