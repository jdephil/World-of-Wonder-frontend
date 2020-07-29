import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js'
import '../modals/journal.css'

class Journal extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });
    }


    render() {
        return (
            <div>
                <a class="modal-trigger" href="#modal1">
                    <img className="journal" src="https://img.icons8.com/plasticine/100/000000/journal.png" alt="Journal" />
                </a>
                {
                    this.props.isAuthenticated ?
                    <div id="modal1" className="modal">
                        <h5 class="container modal-close right-align black-text" id="close">&#10005;</h5>
                        <div class="container modal-content center">
                            <form action="/journal" method="POST">
                                <h1 className = "black-text">Journal Entry</h1>
                                <hr></hr>
                                <div class="input-field">
                                    <i class="material-icons prefix">title</i>
                                    <input type="text" name="journalTitle" id="journalTitle" />
                                    <label for="journalTitle">Title</label>
                                </div>
                                <div class="input-field">
                                    <i class="material-icons prefix">create</i>
                                    <input type="text" name="journalContent" id="journalContent" />
                                    <label for="journalContent">Content</label>
                                </div>
                                <input type="submit" value="Submit" class="black white-text btn" />
                            </form>
                        </div>
                    </div>
                    :
                    <div id="modal1" className="modal">
                        <h5 class="container modal-close right-align black-text" id="close">&#10005;</h5>
                        <div class="container modal-content center black-text">
                            <h3>Please <Link className="blue-text modal-close" to='/login'>login</Link> to start your journal!</h3>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Journal;
