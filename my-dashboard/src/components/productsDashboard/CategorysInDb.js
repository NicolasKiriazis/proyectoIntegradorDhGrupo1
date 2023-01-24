import React from 'react'
import '../../assets/css/app.css'
import {useEffect,useState} from 'react'
import Category from './Category'

const CategorysInDb = () => {
    
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        fetch('http://localhost:2000/api/products')
        .then(respuesta => respuesta.json())
        .then(categorias => {
            //console.log(movies)
            setCategorias(categorias.meta.countByCategory)
        })


        }, [])

    return (

        <>
        {/*<!-- Categories in DB -->*/}
        <div className="col-lg-6 mb-4 d-flex mx-auto align-items-center">					
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-gray-800">Total de productos por categoría</h6>
            </div>
            <div className="card-body fondoCaja bg-gray-200">
                <div className="row">
                    {
                        categorias.map((categoria,index)=>{
                            return  <Category  {...categoria}  key={index} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
        </>


    )
}

export default CategorysInDb