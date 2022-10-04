import styled from 'styled-components'
import { color } from '../color'

export const Container = styled.div<{color: string}>`
  button {
    border-radius: 50%;
    background-color: ${(props => props.color)};
  }
`