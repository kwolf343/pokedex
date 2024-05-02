import React from 'react';
import "./Pokemon.css";
import charizard from "../../images/imagen.png";

function Pokemon({ url, nombre, tipos }) {
    return (
        <div className="pokemon">
            <img src={url} />
            <div className="data-pokemon">
                <p className="name">{nombre}</p>
                <div className="clases-pokemon d-flex justify-content-center">
                    {tipos.map((tipo, index) => (
                        <p key={index} className={`type type-${tipo.type.name}`}>{tipo.type.name}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Pokemon;
