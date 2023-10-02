import React from 'react'
import CartHeader from '@components/Eshop/Cart/CartHeader'
import AuthWrapper from '../AuthWrapper'

interface ICheckoutContainer {
  title: string
  children: React.ReactNode
  currentStep?: 'cart' | 'address' | 'confirmation'
}

const CheckoutContainer: React.FC<ICheckoutContainer> = ({ children, title, currentStep = 'cart' }) => {
  return (
    <AuthWrapper>
      <CartHeader currentStep={currentStep} />
      <div className="viewContainer">
        <div className="content content--withTractor p-30">
          <p className="weight-black size-veryLarge flex-selfStart">{title}</p>
          <div className="cart-Layout grid-3 grid-1Mobile mt-15 mt-15Mobile">{children}</div>
        </div>
      </div>
    </AuthWrapper>
  )
}

export default CheckoutContainer
