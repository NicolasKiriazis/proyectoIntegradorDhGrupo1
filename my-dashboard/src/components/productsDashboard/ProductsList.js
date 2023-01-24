import React from 'react'
import './ProductsList.css'

const ProductsList = ({ product }) => {

    return (
        <>
            <div className="contenedor">
                <div className="producto">
                    
                        <img src={product.image} alt={product.name} className="imagen"/>
                    
                    <div>
                        <p>{product.name} </p>
                        <p>{"$" + product.price} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsList