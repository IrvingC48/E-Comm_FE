import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from 'evergreen-ui'
import ProductCard from '../ProductCard/ProductCard'

//axios
import { getAllProducts } from '../../axios/config.axios';

const ContainerProducts = () => {

    const [actualPage, setActualPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [products, setProducts] = useState([])

    useEffect(() => {

        const getProducts = async () => {
            const { status, data } = await getAllProducts(actualPage);
            if (status === 200) {
                const { totalPages, docs} = data;
                setTotalPage(totalPages);
                setProducts(docs);
            }
        }
        getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [actualPage]);

    return (
        <>
            <div className="is-flex jc-center pt-2">
                <Pagination
                    page={actualPage || 1} totalPages={totalPage || 1}
                    onPreviousPage={() => setActualPage(actualPage -1)}
                    onNextPage={() => setActualPage(actualPage + 1)}
                    onPageChange={(page) => setActualPage(page)}
                />
            </div>
            <div className="section is-medium pt-0 is-grid cols4">
                {products.map(product => {
                    return (
                        <Link key={product._id} to={`/detail_product/${product._id}`}>
                            <ProductCard data={product}/>
                        </Link>
                    )
                })
                }

            </div>
            <div className="is-flex jc-center pb-2">
                <Pagination
                    page={actualPage || 1} totalPages={totalPage || 1}
                    onPreviousPage={() => setActualPage(actualPage -1)}
                    onNextPage={() => setActualPage(actualPage + 1)}
                    onPageChange={(page) => setActualPage(page)}
                />
            </div>
        </>
    )
}

export default ContainerProducts
