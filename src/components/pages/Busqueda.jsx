import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import { Listado } from './Listado';

export const Busqueda = () => {

    const [articulos, setArticulos] = useState([]);

    const [cargando, setcargando] = useState(true);
    const params = useParams();

    useEffect(() => {
        conseguirArticulos();
    }, []);

    useEffect(() => {
        conseguirArticulos();
    }, [params]);

    const conseguirArticulos = async () => {
        
    const {datos,cargando} = await Peticion (Global.url+"buscar/" + params.busqueda,"GET");
        /*let peticion = await fetch(url, {
            method: "GET"
        });

        let datos = await peticion.json();
        console.log(datos);*/

        if (datos.status === "success") {
            setArticulos(datos.articulos);
        } else{
            setArticulos([]);
        }

        setcargando(false);
    }


    return (
        <>
            {cargando ? "Cargando ..." : 
                (
                articulos.length >= 1 ?
                <Listado articulos = {articulos} setArticulos = {setArticulos}/>:
                 <h1>No hay Articulos</h1>
     
                )
            }

        </>
    );

        
   
}