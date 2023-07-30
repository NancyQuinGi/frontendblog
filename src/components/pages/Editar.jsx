import React from 'react'
import { useState, useEffect } from 'react';
import useForm from '../../hooks/useForm';
import { Peticion } from '../../helpers/Peticion';
import { Global } from '../../helpers/Global';
import { useParams } from 'react-router-dom';



export const Editar = () => {

    const { formulario, enviado, cambiado } = useForm({});
    const [resultado, SetResultado] = useState("no_enviado");
    const [articulo, setArticulo] = useState([]);
    const params = useParams();

    useEffect(() => {
        conseguirArticulo();
    }, []);

    const conseguirArticulo = async () => {

        const { datos } = await Peticion(Global.url + "articulo/" + params.id, "GET");

        if (datos.status === "success") {
            setArticulo(datos.articulo);

        }

    }

    const editarArticulo = async (e) => {
        e.preventDefault();

        // Recoger datos formulario
        let nuevoArticulo = formulario;
        // Guardar Articulos en el Backend
        const { datos } = await Peticion(Global.url + "articulo/" + params.id, "PUT", nuevoArticulo);
        console.log(datos);

        if (datos.status === "success") {
            SetResultado("guardado");

            
        } else {
            SetResultado("error");
        }




    }

    return (

        <div className='jumbo'>
            <h1> Editar articulo </h1>
            <p>Formulario para Editar {articulo.titulo}</p>


            <strong>{resultado === "guardado" ? "Articulo guardado con exito!!" : ""}</strong>

            <strong>{resultado === "error" ? "Los datos proporcionados son incorrectos" : ""}</strong>

            {/* Montar Formulario */}
            <form className="formulario" onSubmit={editarArticulo}>

                <div className="form-group">
                    <label htmlFor="titulo">Titulo</label>
                    <input type="text" name="titulo" onChange={cambiado} defaultValue={articulo.titulo} />
                </div>

                <div className="form-group">
                    <label htmlFor="contenido">Contenido</label>
                    <textarea type="text" name="contenido" onChange={cambiado} defaultValue={articulo.contenido}/>
                </div>

            


                <input type="submit" value="Guardar" className="btn btn-success" />
            </form>

        </div>
    );

}