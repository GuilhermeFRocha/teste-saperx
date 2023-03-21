import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import {HiOutlineHome} from 'react-icons/hi'
import {RiContactsBook2Fill} from 'react-icons/ri'
import {BsFillTelephoneFill} from 'react-icons/bs'

export function Header() {
  return (
    <HeaderContainer>
      <BsFillTelephoneFill size={30}/>

      <nav>
        <NavLink to="/" end title="Home">
          <HiOutlineHome size={32}/>
        </NavLink>
    
      </nav>
    </HeaderContainer>
  )
}