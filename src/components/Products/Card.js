import React from "react";
import { Link } from "react-router-dom";
export default function Card({ product }) {

    // UI of signal product
    return (
        <div key={product.id}  className="product">
            <Link className="product__cointainer" to={`/detailproduct/${product.id}`} title={product.img[product.id-1].title}>
                <img className="product__image" src={product.img[product.id-1].content}></img>
                <p>{product.img[product.id-1].title}</p>
                <p className="product__price">{product.price}</p>
            </Link>
        </div>
    )

}