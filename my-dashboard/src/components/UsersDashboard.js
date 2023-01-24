import React from 'react'
import { useEffect, useState } from 'react'



const UsersDashboard = () => {

	let [usuarios, setUsuarios] = useState([])

	useEffect(() => {

		fetch('http://localhost:2000/api/users')
			.then(respuesta => respuesta.json())
			.then(usuarios => {
				setUsuarios(usuarios.meta.total)
			})


	}, [])


	return (
		<>
	
		</>
	)
}

export default UsersDashboard