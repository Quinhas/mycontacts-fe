import styled, { css } from 'styled-components';

const containerVariants = {
  default: css`background: ${({ theme }) => theme.colors.primary.main};`,
  success: css`background: ${({ theme }) => theme.colors.success.main};`,
  error: css`background: ${({ theme }) => theme.colors.danger.main};`,
};

export const Container = styled.div`
  padding: 1rem 2rem;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0rem 1.25rem 1.25rem -1rem rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${({ type }) => containerVariants[type] || containerVariants.default}

  & + & {
    margin-top: 12px;
  }

`;
