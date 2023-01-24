import React from 'react'
import { useEffect, useState } from 'react'
import ProductList from './ProductsList'
import DataDashboard from './DataDashboard'

const ProductsDashboard = () => {
    
    const [productos, setProductos] = useState([])

    // Consumir la Api, usamos el Hook useEffect y useState
    useEffect(() => {
    fetch('http://localhost:2000/api/products')
    .then(respuesta => respuesta.json())
    .then(productos => {
        setProductos(productos.data)
    })

    }, [])


    return (

        <>
        {productos.map( product => <ProductList key={product.id} product={product}/>)}
        <DataDashboard/>
        </>
    )
}

export default ProductsDashboard