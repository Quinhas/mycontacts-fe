import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 4.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputSearchContainer = styled.div`
  margin-top: 3rem;
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