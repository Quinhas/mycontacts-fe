import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  border-radius: 4px;
  box-shadow: 0rem 1.25rem 1.25rem -1rem rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  & + & {
    margin-top: 12px;
  }

`;
