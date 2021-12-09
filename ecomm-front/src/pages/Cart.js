import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import ProductCart from '../components/ProductCart/ProductCart'
import SubtotalCart from '../components/SubtotalCart/SubtotalCart'

//Context
import CartContext from '../context/Cart/CartContext'
import ProfileContext from '../context/Profile/ProfileContext'

const Cart = () => {
    const { products } = useContext(CartContext);
    const { isAuth } = useContext(ProfileContext);
    const history = useHistory()

    useEffect(() => {

    }, [products])

    const handleClick = () => {
        if (!isAuth) return history.push('/signup');

        // TODO Connect with Stripe Payments
    }

    return (
        <>
            <div className="section pt-2 is-grid cols2 w6-4 fam-card">
                <div className="plr-4">
                    <h2 className="pb-2">Shopping Cart</h2>
                    {products.map((product, index) => {
                        return <ProductCart key={index} index={index} data={product}/>
                    })
                    }
                </div>
                <div className="m-3r">
                    <SubtotalCart/>
                    <button onClick={handleClick} className="mt-2 w-80 is-primary fz-1r fam-card cursor-p">Buy now</button>
                </div>
            </div>
        </>
    )
}

export default Cart
