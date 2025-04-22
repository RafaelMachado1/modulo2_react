import React from "react";
import logo from "../img/logo.png"



function Header() {


    return (
        <div className="logo">
            <h1>Header</h1>
            <section >
                <img src={logo} />
            </section>
        </div>

    )
}

export default Header;