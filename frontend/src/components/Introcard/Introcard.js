import React from 'react'
import './Introcard.css'

const Introcard = ({ index, image, title }) => {
    return (
        <div className="intro">
            <img alt={index} className="video" src={image} />
            <div className="introcontent">
                <label href='#'>{title}</label>
                <button>Know more</button>
            </div>
        </div>
    )
}

export default Introcard;
