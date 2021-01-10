import React from "react";
import { Link } from "react-router-dom";

export default function(props){
        // Datos que vamos a necesitar: 
        // en consola con Object.keys(item) => ["id", "name", "description", "url", "category", "position", "thumb_image_url", "banner_image_url", "logo_url", "column_names_merged_with_images"]
        // - Imagen de fondo: thumb_image_url
        // - Logo: 
        // - Descripción: description 
        // - ID: id
    const {id, description, thumb_image_url, logo} = props.item;
    return(
        <div>
            <img src={thumb_image_url}/>
            <img src={logo}/>
                <div>{description}</div>
                <div>
                    <Link to={`/portfolio/${id}`}> Link </Link>
                </div>
        </div>
        
    );
}