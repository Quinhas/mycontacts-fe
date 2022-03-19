import styled from 'styled-components';

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 1.5625rem;
    height: 3.125rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 1rem;

    &::placeholder {
      color:#BCBCBC;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  strong {
    font-size: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    padding: .5rem 1rem;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.lighter};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.primary.light};
      color: #fff;
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 0.5rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    img {
      transform: rotate(${({ orderBy }) => (orderBy === 'ASC' ? '180deg' : '0deg')});
      transition: transform 0.2s ease-in;
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 1rem;
  border-radius: .25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 1rem;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.light};
        font-weight: bold;
        text-transform: uppercase;
        padding: .25rem;
        border-radius: .25rem;
        margin-left: 0.5rem;
      }
    }

    span {
      display: block;
      font-size: .875rem;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: .5rem;
    }
  }
`;
