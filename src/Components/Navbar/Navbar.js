import "./Navbar.css";
import React from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

export default function Navbar() {

    $(function () {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 10) {
                $('.navbar').addClass('active');
            } else {
                $('.navbar').removeClass('active');
            }
        });
    });

    return (
        <div className="navbar">
            <div className="nav">
                <NavLink
                    to='/'
                    className={({ isActive }) => { return isActive ? "activeLink" : "items" }}
                ><h6>Accueil</h6>
                </NavLink>

                <NavLink
                    className={({ isActive }) => { return isActive ? "activeLink" : "items" }}
                    to='/about'
                ><h6>A propos</h6>
                </NavLink>
                <NavLink
                    className={({ isActive }) => { return isActive ? "activeLink" : "items" }}
                    to='/'
                >
                    <h5>LMK META</h5>
                </NavLink>

                <NavLink
                    className={({ isActive }) => { return isActive ? "activeLink" : "items" }}
                    to='/news'
                ><h6>Actualité</h6>
                </NavLink>

                <NavLink
                    className={({ isActive }) => { return isActive ? "activeLink" : "items" }}
                    to='/purchase'
                ><h6>Paiement</h6>
                </NavLink>
            </div>
        </div>
    )
}
