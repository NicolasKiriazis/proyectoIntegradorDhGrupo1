import React from 'react'
import '../../assets/css/ProductsList.css'

const ProductsList = ({ props }) => {

    return (
        <>
            <div className="contenedor">
                <div className="producto">

                    <img src={props.imageUrl} alt={props.name} className="imagen" />

                    <div>
                        <p id='name'>{props.name} </p>
                        <p id='price'>{"USD$" + props.price} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsList