import React from 'react'
import './Introcard.css'

// const Introcard = ({ image, title }) => {
//     return (
//             <div className='intro'>
//                 <img className='video' src={image} alt={title} />
//                 <div className='content'>
//                     <h2 className='Card__title'>{title}</h2>
//                     <button href='#' className='Card__button'>Read More</button>
//                 </div>
//             </div>
//     );
// };

const Introcard = ({ image, title }) => {
    return (
        <div className="intro">
            <img className="video" src={image} />
            <div className="introcontent">
                <label href='#'>{title}</label>
                <button>Know more</button>
            </div>
        </div>
    )
}

export default Introcard;
