import styled, { css } from 'styled-components';

export default styled.input`
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
  appearance: none;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main}
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}


`;
