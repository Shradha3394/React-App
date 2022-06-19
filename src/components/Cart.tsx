import React from "react";
import { Link } from "react-router-dom";
import CartList from "./CartList";

const Cart = () => {

    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col bg-dark text-white">
                <a className="navbar-brand">Items in your cart</a>
            </div>
        </div>
        <div className="row">
            <div className="col mt-2">
                <h2 className="text-center">Your Cart</h2>
                <table className="table table-bordered table-striped p-2">
                    <thead>
                        <tr>
                            <th>Quantity</th>
                            <th>Product</th>
                            <th className="text-right">Price</th>
                            <th className="text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CartList />
                    </tbody>
                        
                </table>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="text-center">
                    <Link to="/" className="btn btn-secondary m-1">
                        Continue Shopping
                    </Link>
                    <Link to="/checkout" className="btn btn-primary m-1">
                        Checkout
                    </Link>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Cart