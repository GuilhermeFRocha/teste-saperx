import styled, { keyframes } from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  background-color: #202024;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`

export const InputForm = styled.input`
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 8px;
  padding: 4px;
`

const Neon = keyframes`
 from{
  transition: 0%,39%,41%,59%,61%,100%;
  text-shadow: #fff 0 0 1px,
  #00B37E 0 0 2px,
  #00875F 0 0 3px;
} to{
  transition: 40%,60%;
  text-emphasis: none;
}
`

export const TitleNeon = styled.h1`
  text-align: center;
  color: #fff;
  animation: ${Neon} 5s infinite ease-in;
`