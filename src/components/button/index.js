import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 16px;
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  color: #198754;
  border-color: #198754;
  transition: all 0.3s;
  &:hover:enabled {
    color: #ffff;
    background-color: #198754;
  }
`;
