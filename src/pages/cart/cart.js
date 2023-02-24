import React from 'react'
import CartCard from '../../components/cart_card/cart_card'
import { Footer } from '../../components/common/footer/footer'
import { Header } from '../../components/common/header/header'

const CartPage = () => {
  return (
    <div>
        <Header/>
        <CartCard/>
        <Footer/>
    </div>
  )
}

export default CartPage