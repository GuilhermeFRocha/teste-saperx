import styled from "styled-components";

export const ActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  margin-top: 24px;
  
`

export const CancelButton = styled.button `
  background: red;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 0.2s
  }
`

export const ConfirmButton = styled.button `
  background: green;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 0.2s
  }
`