import React from "react";
import Usuario from "./../img/Usuario.png"

export function InfosUsuario() {
    const nomeUsuario = "Rafael"
    return (
        <>
            <div className="usuario">
                <img src={Usuario} />
                <h4>{nomeUsuario}</h4>
            </div>
        </>
    )
}