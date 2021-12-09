import React from 'react'

import './p-card.scss';

const ProductCard = ({ data }) => {
    return (
        <div className="pd-4">
            <article className="card">
                <figure className="card-image">
                    <img src={data.imageUrl} alt="" className="image"/>
                </figure>
                <div className="card-detail">
                    <div className="shoe-name">
                        <span className="brand">{data.brand}</span>
                        <h1 className="title">{data.name}</h1>
                    </div>
                    <div className="description">
                        <h3 className="title">SKU</h3>
                        <p className="sku">{data.sku}</p>
                    </div>
                    <p className="buy-price">{data.price}$</p>
                </div>
            </article>
        </div>
    )
}

export default ProductCard
