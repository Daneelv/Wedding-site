import React, {useEffect} from 'react';
import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import 'materialize-css/dist/css/materialize.min.css';

if (typeof window !== 'undefined') {
    const M = window;
    require('materialize-css');
}


const Nav = () => {
    useEffect(() => { 
        const elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {edge: "left"});
    },[]);



    return (
        <>
    <div class="navbar-fixed">
            <nav className = {navStyles.navbar}>
            <div class="nav-wrapper">
            <a href="#" data-target="mobile-nav" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
            <a href="#" class="logo">Logo</a>
            
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#banner">Home</a></li>
                <li><a href="#about">About</a></li>
                <li className= {navStyles.btnRsvp}><a href="rsvp">RSVP</a></li>
            </ul>
            </div>
            </nav>
      </div>
        <ul class="sidenav" id="mobile-nav">
        <li><a href="#banner">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="rsvp" class="">RSVP</a></li>
        </ul>
        </>
    )
}

export default Nav;
