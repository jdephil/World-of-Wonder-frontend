import React from 'react';
import './AncientEgypt.css'

const AncientEgypt = () => {
    return (
        <div class = "row">
            <div className = "">
                <img className="cosmetic hoverable" src="/cosmetics-egypt.png" alt="" />
            </div>
            <div className = "">
                <img className="cosmetic hoverable" src="/funeral-beads-egypt.png" alt="" />
            </div>
            <div className = "">
                <img className="cosmetic hoverable" src="/mummified-birds-egypt.png" alt="" />
            </div>
            {/* <div className = "hoverable">
                <img className="mummy" src="/mummy-egypt.png" alt="" />
            </div> */}
            <div>
                <img className="mummies hoverable" src="/mummy2-egypt.png" alt="" />
            </div>
            <div className = "hoverable">
                <img className="slipper" src="/slippers-egypt.png" alt="" />
            </div>
            <div className = "hoverable">
                <img className="writing" src="/wall-hanging-egypt.png" alt="" />
            </div>
            <div className = "hoverable">
                <img className="cosmetic" src="/writings-egypt.png" alt="" />
            </div>

        </div>
    );
};

export default AncientEgypt;