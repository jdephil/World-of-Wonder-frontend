import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import './About.css'
import { NavLink } from 'react-router-dom';

export class About extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems, {})
        });
    }

    render() {
        return (
            <div>
                {/* Parallax Photo 1 */}
                <div className="parallax-container">
                    <div className="parallax">
                        <img src="https://media.vogue.fr/photos/5cf67fc162542776dea04618/master/w_1536%2cc_limit/GettyImages-951058476.jpg" alt="" />
                    </div>
                </div>

                <div className="section white center-align container about">
                    <h2>What is World of Wonder?</h2>
                    <h5 className = "aboutText">World of Wonder is an interactive, online application dedicated to bringing a musuem to you. There are varieties of collections to view and artifacts to learn about!</h5>
                    <NavLink to = "/office" class = "waves-effect waves-light white-text black btn"><i class = "material-icons right">chevron_right</i> Enter the office</NavLink>
                </div>

                <div className="parallax-container">
                    <div className = "parallax">
                        <img src="https://s2.best-wallpaper.net/wallpaper/1920x1080/1801/Museum-of-Natural-History-London-England_1920x1080.jpg" alt="" />
                    </div>
                </div>
            </div>
        );
    };

}

export default About;