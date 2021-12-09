import React from 'react'
import ContainerProducts from '../components/ContainerProducts/ContainerProducts'
import FilterProducts from '../components/FilterProducts/FilterProducts'
import Footer from '../components/Footer/Footer'

const CatalogProducts = () => {
    return (
        <>
            <FilterProducts />
            <ContainerProducts />
            <Footer />
        </>
    )
}

export default CatalogProducts
