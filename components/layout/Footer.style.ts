import styled from 'styled-components'

export const Container = styled.div``

export const BottomMenu = styled.ul`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 40px;
  padding-top: 4px;
  background-color: ${(props)=>props.theme.backgroundColor};
`

export const BottomMenuItem = styled.li`
  width: 40px;
`
