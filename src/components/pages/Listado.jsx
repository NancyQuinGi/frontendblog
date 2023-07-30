import React from 'react';
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import {Link} from 'react-router-dom';



export const Listado = ({articulos, setArticulos}) => {
    
    const eliminar = async (id) => {

        let {datos}= await Peticion (Global.url + "articulo/" + id, "DELETE");
        console.log(datos);

        if(datos.status === "success"){
            let articulosActualizados = articulos.filter(articulo => articulo._id !== id);
            setArticulos(articulosActualizados);
        }
    }

    return (
        articulos.map(articulo => {
                return (
                    <article key={articulo._id} className="articulo-item">
                        <div className="mascara">
                            {articulo.imagen != "default.png" && <img src={Global.url +"imagen/" + articulo.imagen} />}
                            {articulo.imagen == "default.png" && <img src="https://www.noticias.ltda/wp-content/uploads/2019/02/Curso-online.png" />}
                        </div>
                        <div className="datos">
                            <h3 className="title"><Link to ={"/articulo/"+ articulo._id}>{articulo.titulo}</Link></h3>
                            <p className="description">{articulo.contenido}</p>

                            <Link  to={"/editar/" + articulo._id} className="edit">Editar</Link>
                            <button className="delete" onClick={() => {
                                eliminar(articulo._id)
                            }}>Borrar</button>
                        </div>

                    </article>

                )
            })
    
    );
        
}