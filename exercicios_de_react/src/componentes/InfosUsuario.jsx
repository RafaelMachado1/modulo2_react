import React from "react";


export function InfosUsuario(props) {

    return (

        <div className="usuario">
            {props.imagemUsuario}
            <h4>{props.userName}</h4>
        </div>
    )
}