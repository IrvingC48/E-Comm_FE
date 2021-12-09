import React, { useContext, useEffect } from 'react'
import './subtotal.scss';

//Context
import CartContext from '../../context/Cart/CartContext';

const SubtotalCart = () => {

    const { getTotal, products, amountTotal } = useContext(CartContext);

    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < products.length; i++) {
            sum += Number(products[i].count) * Number(products[i].price);
        };
        getTotal(sum);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products.length])

    return (
        <div className="container-subt">
            <h2>Order summary</h2>
            <div className="is-grid cols2">
                <span className="detail-item">Subtotal</span>
                <span className="detail-item">${amountTotal}</span>
                <span className="detail-item">Total</span>
                <span className="detail-item">${amountTotal}</span>
            </div>
        </div>
    )
}

export default SubtotalCart
