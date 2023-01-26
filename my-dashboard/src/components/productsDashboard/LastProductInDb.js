import React, { useState, useEffect } from 'react'


const LastProductInDb = () => {

    const [lastProduct, setlastProduct] = useState([])


    useEffect(() => {
        fetch('http://localhost:2000/api/products')
            .then(respuesta => respuesta.json())
            .then(productos => {
                setlastProduct(productos.data.pop())
                console.log(productos.data.pop())
            })

    }, [])



    return (
        <>

            <div className="col-lg-6 mb-4 d-flex align-items-center mx-auto last-container">
                <div className="card shadow mb-4" style={{ width: 40 + 'vw' }}>
                    <div className="card-header py-3" >
                        <h5 className="m-0 font-weight-bold text-gray-800">Último producto Creado</h5>
                    </div>
                    <div className="card-body bg-gray-200">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 32 + 'vw' }} src={lastProduct.imageUrl} alt=" producto " />
                        <h4>{lastProduct.name}</h4>
                        <p>{lastProduct.description}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default LastProductInDb