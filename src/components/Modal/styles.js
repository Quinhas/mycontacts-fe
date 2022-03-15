import styled from 'styled-components';

export const Overlay = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 28.125rem;
  background: #fff;
  border-radius: 0.25rem;
  padding: 1.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  h1 {
    font-size: 1.375rem;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )}
  }

  p {
    margin-top: 0.5rem;
  }
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
