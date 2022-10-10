import { useMediaQuery } from 'react-responsive'

interface IProps {
  children: JSX.Element;
}

const Desktop = ({ children }: IProps) => {
  const isDesktop = useMediaQuery({ minWidth: 768 })
  return isDesktop ? children : null
}

export default Desktop