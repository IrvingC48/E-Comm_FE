import React, { useContext } from 'react';
import { IconButton } from 'evergreen-ui';
import { MdDelete } from 'react-icons/md';

import './productCart.scss';

//Context
import CartContext from '../../context/Cart/CartContext';

const ProductCart = ({ data, index }) => {
    const { removeOneFromCart } = useContext(CartContext);

    return (
        <div className="container-pc">
            <hr/>
            <div className="product-cart">
                <figure className="pc-image">
                    <img src={data.image} alt="" className="image"/>
                </figure>
                <span className="pc-name">{data.name}</span>
                <span className="input-count">{data.count}</span>
                <span className="pc-price">{data.price}$</span>
                <IconButton icon={<MdDelete/>} onClick={() => removeOneFromCart(index)}/>
            </div>
        </div>
    )
}

export default ProductCart
