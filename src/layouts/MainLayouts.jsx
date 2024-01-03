import React from 'react'
import Menu from '../components/Menu'
import { Outlet } from 'react-router-dom'
const MainLayouts = () => {
  return (
    <>
        <Menu/>
        <Outlet/>
    </>
  )
}

export default MainLayouts