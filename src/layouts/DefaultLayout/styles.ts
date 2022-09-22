import styled from 'styled-components'

export const LayoultContainer = styled.div`
  max-width: 74rem;
  padding: 2.5rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  border-radius: 8px;
  background: ${(props) => props.theme['gray-800']};
  display: flex;
  flex-direction: column;
`
