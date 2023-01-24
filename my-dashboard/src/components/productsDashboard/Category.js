import React from 'react'

const Category = (props) => {
    return (
        <>
            <div className="col-lg-8 mb-4 mx-auto">
                <div className="card text-white bg-dark shadow">
                    <div className="card-body">
                        {props.name}: {props.total}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category