import styled from 'styled-components';

export const Container = styled.header`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    img {
      margin-right: 0.5rem;
      transform: rotate(-90deg);
    }

    span {
      color: ${({ theme }) => theme.colors.primary.main};

      font-weight: bold;
    }
  }

  h1 {
    font-size: 1.5rem;
  }
`;
