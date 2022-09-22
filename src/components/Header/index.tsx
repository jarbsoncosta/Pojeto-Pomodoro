import { HeaderContent } from './styles'
import logoImg from '../../assets/logo.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContent>
      <img src={logoImg} alt="" />
      <nav>
        <NavLink to="/" title="Time">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContent>
  )
}
