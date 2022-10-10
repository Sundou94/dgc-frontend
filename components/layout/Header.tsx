import * as S from './Header.style'
import Mobile from '../media/Mobile'

const Header = () => {
  return (
    <S.Container>
      <Mobile>
        <S.HeaderMenu>
          <S.Logo>DGC</S.Logo>
        </S.HeaderMenu>
      </Mobile>
    </S.Container>
  )
}

export default Header