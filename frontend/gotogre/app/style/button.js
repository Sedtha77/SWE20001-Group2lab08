import styled from 'styled-components';

const ActionButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1.5px solid #297eff;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;

  &:hover {
    background-color: rgba(41, 127, 255, 0.125);
  }
`;

const RoundedRectButton = styled.button`
  padding: 0.5rem 2rem;
  color: white;
  background-color: #2967b1;
  border-radius: 1rem;
  font-weight: 600;

  &:disabled {
    color: rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 0.125);
  }
`;

export { ActionButton, RoundedRectButton };
