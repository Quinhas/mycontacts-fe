import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  border: 2px solid #fff;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 3.25rem;
  border-radius: 0.25rem;
  outline: none;
  padding: 0 1rem;
  font-size: 1rem;
  transition: border-COLOR 0.2s ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main}
  }
`;
