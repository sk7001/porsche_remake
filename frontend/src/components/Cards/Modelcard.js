import React from 'react';
import './Modelcard.css';

const ModelCard = ({ image, title, price }) => {
    return (
            <div className='Card'>
                <img className='Card__image' src={image} alt={title} />
                <div className='Card__content'>
                    <h2 className='Card__title'>{title}</h2>
                    <p className='Card__price'>{price}</p>
                    <button href='#' className='Card__button'>Read More</button>
                </div>
            </div>
    );
};

export default ModelCard;
