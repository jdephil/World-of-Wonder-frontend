import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
 
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
 
                    <div id="modal1" class="container modal center-align">
                        <div class="container modal-content black-text">
                            <h4>Journal Entry</h4>
                            <hr></hr>
                        </div>
 
                        <form action = "/journal" method = "POST" className = "container">
                            <div class = "input-field black-text">
                                <i class = "material-icons prefix">person</i>
                                <input type = "text" name = "title" />
                                <label for = "title">Title</label>
                            </div>
 
 
                            <div class = "input-field black-text">
                                <i class = "material-icons prefix">person</i>
                                <input type = "text" name = "title" />
                                <label for = "title">Title</label>
                            </div>
 
                        </form>
 
                        <div class="modal-footer center-align">
                            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Submit</a>
                        </div>
                    </div>
            </div>
        );
    }
}
 
export default Journal;
