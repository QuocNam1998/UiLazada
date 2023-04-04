import React, { useEffect, useState } from 'react'
import Card from './Card'
import { DataProducts } from '../Data/DataProducts'

const Listproduct = () => {
    // tạo 1 mảng mới có chiều dài bằng 1/2 mảng ban đầu
    const [initialArray, setInitialArray] = useState(() => (DataProducts.slice(0, (DataProducts.length / 2))))

    const [isLoadMore, setIsLoadMore] = useState(false)
    useEffect(() => {
        setIsLoadMore(!isLoadMore)

    }, [initialArray])

    const loadMore = () => {
        if (isLoadMore) {
            setInitialArray(DataProducts)
        }
        else {
            setInitialArray(DataProducts.slice(0, (DataProducts.length / 2)))
        }
    }
    return (
        <div>
            <div className="body">
                <div className="body__products">
                    <div className="list__products">
                        {initialArray.map(product => {
                            return (
                                <div key={product.id}>
                                    <Card product={product} />
                                </div>
                            )
                        })}
                        <div className="product__loadmore">
                            <button onClick={loadMore} className="product__loadmore--button" >{isLoadMore ? 'load more ' : 'hide'}</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Listproduct