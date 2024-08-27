import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import CartTab from './cartTab' 
import Homeshop from '../Pages/Shop/Homeshop'
import { useSelector } from 'react-redux'
const Shoplayout = () => {
  const statusTabCart = useSelector(store => store.cart.statusTab);
  return (
    <div className='bg-zinc-200 pt-20'>
    <main className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500
    ${statusTabCart === false ? "" : "-translate-x-56" }`}>
        <Header />
        <Homeshop />
    </main>
    <CartTab />
</div>
  )
}

export default Shoplayout