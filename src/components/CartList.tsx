import React, { Fragment } from 'react'
import { useAppSelector } from '../app/hooks';
import { SelectedItem } from '../models/Dish'
import { getFromStore } from '../utility';

const CartList = () => {
    const cart: SelectedItem[] = useAppSelector(store => getFromStore(store, "cart"));
    debugger
    const totalPrice = +cart.reduce((total, item) => total + +item.dish.price, 0)

    return (
        cart.length > 0 ? (
            <Fragment>
                {
                    cart.map(item => (
                        <tr key={item.dish.id}>
                            <td>
                                <input type="number" min="1" className="form-control-sm"
                                    style={{ width: 5 + 'em' }} value={item.quantity}
                                />
                            </td>
                            <td>{item.dish.name}</td>
                            <td className="text-right">
                                {item.dish.price}
                            </td>
                            <td className="text-right">
                                {(item.quantity * item.dish.price)}
                            </td>
                            <td className="text-center">
                                <button className="btn btn-sm btn-danger">
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))
                }
                <tr>
                    <td colSpan={3} className="text-right">Sub Total:</td>
                    <td className="text-right">
                        {totalPrice}
                    </td>
                </tr>
            </Fragment>
        ) :
            (
                <tr>
                    <td colSpan={4} className="text-center">
                        Your cart is empty
                    </td>
                </tr>
            )
    )
}

export default CartList