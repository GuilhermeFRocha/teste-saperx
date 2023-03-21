import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, TitleNeon } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <TitleNeon>Agenda telefônica</TitleNeon>
      <Outlet />
    </LayoutContainer>
  )
}