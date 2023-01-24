import React from 'react'
import './ProductsList.css'

const ProductsList = ({ props }) => {

    return (
        <>
            <div className="contenedor">
                <div className="producto">

                    <img src={props.imageUrl} alt={props.name} className="imagen" />

                    <div>
                        <p>{props.name} </p>
                        <p>{"$" + props.price} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsList