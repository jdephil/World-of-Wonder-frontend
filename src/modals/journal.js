import React, { Component } from 'react';
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

                <div id="modal1" class="container modal center-align">
                    <div class="black-text">
                        <h1>Journal Entry</h1>
                    </div>

                    <hr></hr>

                    <form action="/journal" method="POST" className="container">
                        <div class="input-field black-text">
                            <h1>Title</h1>
                            <input type="text" name="title" />
                        </div>
                        <div class="input-field black-text">
                            <h1>Title</h1>
                            <input type="text" name="title" />
                        </div>
                    </form>

                    <div class="modal-footer center-align">
                        <a href="#!" class="modal-close btn-flat">Submit</a>
                    </div>

                </div>
            </div>
        );
    }
}

export default Journal;
