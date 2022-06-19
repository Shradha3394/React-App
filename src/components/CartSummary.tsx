import React from 'react'
import { Link } from 'react-router-dom'

const CartSummary = ({totalItems} : {totalItems : number}) => {
  return (
    <div className="float-right">
    <small>
        Your cart:
        <span>
            {totalItems}
        </span>
    </small>
    <Link to="/cart" className="btn btn-sm bg-dark text-white">
        <i className="fa fa-shopping-cart"></i>
    </Link>
</div>
  )
}

export default CartSummary