import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';


export const Articulo = () => {

    const [articulo, setArticulo] = useState([]);

    const [cargando, setcargando] = useState(true);

    const params = useParams();

    useEffect(() => {
        conseguirArticulo();
    }, []);

    const conseguirArticulo = async () => {

        const { datos, cargando } = await Peticion(Global.url + "articulo/" + params.id, "GET");

        if (datos.status === "success") {
            setArticulo(datos.articulo);

        }

        setcargando(false);
    }


    return (
        <div className='jumbo'>
            {cargando ? "Cargando ..." :
                <>
                    
                    <h1>{articulo.titulo}</h1>
                    <span>{articulo.fecha}</span>
                    <p>{articulo.contenido}</p>
                </>
            }

        </div>
    );



}