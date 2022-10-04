import type { NextPage } from 'next'
import { color } from 'styles/color'
import * as S from 'styles/pages/index.style'
import { useState } from 'react'

const Home: NextPage = () => {
  const [curColor,setColor] = useState("black");

  const onClick = () => {
    setColor((prev) => color.gray);
  }

  return (
    <S.Container
      color={curColor}
    >
      <button onClick={onClick}>개커</button>
    </S.Container>
  )
}

export default Home
