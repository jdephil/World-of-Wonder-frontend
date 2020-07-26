import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js'

export class Navbar extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {})
        });
    }

    render() {
        return (
            <nav>
                <div class="container nav-wrapper">
                    <Link className="brand-logo" exact to="/"><div>World of Wonder</div></Link>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        {/* <li><NavLink to="/collections">Collections</NavLink></li> */}
                        <li><NavLink to="/profile">Profile</NavLink></li>
                        <li><NavLink to="/office">Office</NavLink></li>
                    </ul>
                </div>

                {/* Burger menu */}
                <ul class="sidenav" id="mobile-demo">
                    {/* <li><NavLink to="/collections">Collections</NavLink></li> */}
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/office">Office</NavLink></li>
                </ul>

                <img className="journal" src="https://img.icons8.com/plasticine/100/000000/journal.png" alt="Journal" />
            </nav >

        );
    };
}

export default Navbar;