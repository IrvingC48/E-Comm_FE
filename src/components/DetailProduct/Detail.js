import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router';

import './detail.scss';

//axios
import { getProductById } from '../../axios/config.axios';

//Context
import CartContext from '../../context/Cart/CartContext';

const Detail = () => {
    const history = useHistory();
    const { productId } = useParams();
    const [detailProduct, setSetailProduct] = useState({});
    const [count, setCount] = useState(0);

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const getDetail = async () => {
            const { status, data } = await getProductById(productId);
            if (status === 200) {
                setSetailProduct(data);
            };
        };
        getDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handlerClick = (operator) => {
        if (operator === '+') {
            setCount(count + 1);
        } else if (operator === '-') {
            if (count > 0) setCount(count - 1)
        }
    };

    const addProduct = (type) => {
        if (count === 0) {
            return alert('Product amount must be greater than 0');
        };

        const PRODUCT = {
            image: detailProduct.imageUrl,
            name: detailProduct.name,
            count,
            price: detailProduct.price
        };
        addToCart(PRODUCT);
        if (!type) return alert('Product add to cart');
    };

    const buyProduct = () => {
        addProduct('buy');
        history.push('/cart');
    };

    return (
        <div className="section pt-2 is-grid cols2 details-product">
            {/* {console.log(productId)} */}
            <figure className="detail-img">
                <img src={detailProduct.imageUrl} alt=""/>
            </figure>
            <div className="detail-descp">
                <span className="descp-brand">
                    {detailProduct.brand}
                </span>
                <span className="descp-name">
                    {detailProduct.name}
                </span>
                <p className="descp-all">
                    {detailProduct.description}
                </p>
                <span className="descp-sku">
                    <span className="sku-title">SKU</span>{detailProduct.sku}
                </span>
                <div className="descp-buttons is-grid cols2">
                    <div className="descp-col">
                        <span className="col-title">Amount</span>
                        <div className="buttons-amount">
                            <button className="btn-count" onClick={() => handlerClick('-')}>-</button>
                            <input type="number" placeholder="0" min="0" readOnly={count} onBlur={() => setCount(count)} className="input-count"/>
                            <button className="btn-count" onClick={() => handlerClick('+')}>+</button>
                        </div>
                    </div>
                    <div className="descp-col">
                        <span className="col-title">Size</span>
                        <div className="sizes">
                            {detailProduct.sizes && detailProduct.sizes.map(size => {
                                return (<button key={size} value={size} className="btn-size">{size}</button>)
                            })
                            }
                        </div>
                    </div>
                    <button className="button-add-cart" onClick={addProduct}>Add to cart</button>
                    <button className="button-buy" onClick={buyProduct}>Buy now</button>
                </div>
            </div>
        </div>
    )
}

export default Detail
