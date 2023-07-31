import React from 'react';

export const NavBar = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <div className='nav__brand'>
                    <a className='nav__link' href="#">MiMarca</a>
                </div>
                <ul>
                    <li>
                        <a className='nav_link' href="#">Categoria 1</a>
                    </li>
                    <li>
                        <a className='nav__link' href="#">Categoria 2</a>
                    </li>
                    <li>
                        <a className='nav__link' href="#">Carrito</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;