import { useMediaQuery } from 'react-responsive'

interface IProps {
  children: JSX.Element;
}

const Mobile = ({ children }: IProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

export default Mobile