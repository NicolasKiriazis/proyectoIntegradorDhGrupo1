import React from 'react'
import { useEffect, useState } from 'react'
import ProductsDashboard from './productsDashboard/ProductsDashboard'



const UsersDashboard = () => {

	let [usuarios, setUsuarios] = useState([])

	useEffect(() => {

		fetch('http://localhost:2000/api/users')
			.then(respuesta => respuesta.json())
			.then(usuarios => {
				setUsuarios(usuarios.meta.total)
                console.log(usuarios.meta.total)
			})


	}, [])


	return (
		<>
		<div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Gamer House App</h1>
            </div>
	                    {/*<!-- Total awards -->*/}
						<div className="col-md-4 mb-4">
						<div className="card border-left-success shadow h-100 py-2">
							<div className="card-body">
								<div className="row no-gutters align-items-center">
									<div className="col mr-2">
										<div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Total Usuarios: </div>
										<div className="h5 mb-0 font-weight-bold text-gray-800"> {usuarios} </div>
									</div>
									<div className="col-auto">
										<i className="fas fa-award fa-2x text-gray-300"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
		</>
	)
}

export default UsersDashboard