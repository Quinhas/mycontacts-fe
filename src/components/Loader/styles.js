import styled from 'styled-components';

export const Overlay = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  background: rgba(246, 245, 252, 0.7);
  backdrop-filter: blur(3px);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
