import CartWidget from '../CartWidget';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <div className='nav__brand'>
                    <NavLink className='nav__link' to='/'>MiMarca</NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink className='nav_link' to='/categoria/films'>Peliculas</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav__link' to='/categoria/series'>Series</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav__link' to='/cart'>
                            <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;