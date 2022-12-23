import './SharedLayout.scss'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/MainPage/Header/Header'

export const SharedLayout = () => {
  return (
    <>
    <Header />
    <Outlet/>
    </>
  )
}

                