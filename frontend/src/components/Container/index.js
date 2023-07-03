import React from 'react'
import './Container.scss'

function index({ name, onClick }) {
    return (
        <div className='container__card'>
            <h3>{name}</h3>
        </div>
    )
}

export default index