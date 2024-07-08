import React from 'react'
import './Modelcard.css'

export default function Modelcard() {
    return (
        <div>
            <div className='Card'>
                <img className='Card__image' src="https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-taycan/small/06c7f690-0b8d-11ef-8128-005056bbdc38;sN;twebp;c890;gc/porsche-small.webp" />
                <div className='Card__content'>
                    <h2 className='Card__title'>TAYCAN</h2>
                    <p className='Card__price'>from 18,942,000/-
                    </p>
                    <button href='#' className='Card__button'>Read More</button>
                </div>
            </div>
        </div>
    )
}
