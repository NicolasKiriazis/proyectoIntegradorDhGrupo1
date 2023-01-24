import React from 'react'
import { useEffect, useState } from 'react'
import Categorias from './Categorias'


const DataDashboard = ({ totalCategory }) => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        fetch('http://localhost:2000/api/products')
        .then(respuesta => respuesta.json())
        .then(categories => {
            setCategorias(categorias.meta.countByCategory)
        })
    }, [])


        return (

            <>
            {categorias.map( product => <Categorias key={categorias.i} categorias={categorias}/>)}
            </>
        )
    }

export default DataDashboard