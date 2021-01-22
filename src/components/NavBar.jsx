import React from 'react';
import './NavBar.css';
import logoMenu from '../assets/imgs/logo-03.png';
import logoMenumobile from '../assets/imgs/logo-05.png';

const NavBar = () => {

    return (

        <nav className='box-navBar'>
            <img
                className="imgLogoMenuNavegacion not-visible-mobile"
                src={logoMenu}
                alt="Logo"
            />
            <img
                className="imgLogoMenuNavegacion not-visible-desktop"
                src={logoMenumobile}
                alt="Logo"
            />
            <ul className="box-menu-desktop" >
                <li><a href="https://houm.com/cl/propietario">Soy propietario</a></li>
                <li><a href="https://me.houm.com/pagar">Pagar arriendo</a></li>
                <li><a href="https://houm.com/cl/partner">Sé un  partner</a></li>
                <li><a href="https://houm.com/cl/login">Mi cuenta</a></li>
            </ul>
        </nav>

    );
};

export default NavBar;