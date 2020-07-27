import React from 'react';
import './AncientEgypt.css'

const AncientEgypt = () => {
    return (
        <div class="egypt">

            <div class="row">
                <div className="col s12 m6 l12 banner">
                    <img className="writing hoverable" src="/wall-hanging-egypt.png" alt="" />
                </div>
            </div>
            <div class="row">
                <div class="col s12 m6 l12 midRow">
                    <img className="mummy hoverable left" src="/mummy-egypt.png" alt="" />
                    
                    <img className="mummies hoverable right" src="/mummy2-egypt.png" alt="" />
                </div>
            </div>

            <div class = "row">
                <div class = "col s12 m6 l12 botRow">
                    <img className="slipper" src="/slippers-egypt.png" alt="" />
                    <img className="cosmetic" src="/writings-egypt.png" alt="" />
                    <img src="/cosmetics-egypt.png" className = "cosmetic" alt=""/>
                    <img src="mummified-birds-egypt.png" className = "cosmetic" alt=""/>
                    <img src="funeral-beads-egypt.png" className = "cosmetic" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default AncientEgypt;