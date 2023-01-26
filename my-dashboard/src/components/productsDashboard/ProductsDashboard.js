import React from 'react'
import { useEffect, useState } from 'react'
import ProductList from './ProductsList'


const ProductsDashboard = ({props}) => {

    const [productos, setProductos] = useState([])
    const [total, setTotal] = useState([])
    const [totalCategory, settotalCategory] = useState([])
    
    


    // Consumir la Api, usamos el Hook useEffect y useState
    useEffect(() => {
        fetch('http://localhost:2000/api/products')
            .then(respuesta => respuesta.json())
            .then(productos => {
                console.log(productos)
                setProductos(productos.data)
                setTotal(productos.meta.total)
                settotalCategory(productos.meta.countByCategory)
            })

    }, [])


    return (

        <>
            {/*<!-- Content Row Movies-->*/}
            <div className="row">

                {/*<!-- Movies in Data Base -->*/}
                <div className="col-md-4 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Productos: </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{total} </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-film fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/*<!-- Actors quantity -->*/}
                <div className="col-md-4 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Total de Categorías
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800"> {totalCategory.length} </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-user fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Nuestros Productos:</h2>
            {productos.map(product => <ProductList key={product.id} props={product} />)}

        </>
    )
}

export default ProductsDashboard