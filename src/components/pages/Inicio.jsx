import React from 'react'
import {Link} from "react-router-dom"
export const Inicio = () => {
    
    return (
    
    <div className= 'jumbo'>
        <h1>Bienvenido a Blog </h1>
        <p> Blog desarrollado con el MERN Stack</p>
        <Link to = "/articulos" className = 'button'> Ver los Articulos </Link>
    </div>
    
    );
        
}