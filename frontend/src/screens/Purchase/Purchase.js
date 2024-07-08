import React from 'react'
import Homenavbar from '../../components/Navbar/Homenavbar'
import ModelCard from '../../components/Cards/Modelcard'

const modelData = [
    {
        "image": "https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-718/small/06c7f690-0b8d-11ef-8128-005056bbdc38;sN;twebp;c890;gc/porsche-small.webp",
        "title": "718",
        "price": "from INR 14,772,000"
    },
    {
        "image": "https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-911/small/06c7f690-0b8d-11ef-8128-005056bbdc38;sN;twebp;c890;gc/porsche-small.webp",
        "title": "911",
        "price": "from INR 19,899,000"
    },
    {
        "image": "https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-taycan/small/06c7f690-0b8d-11ef-8128-005056bbdc38;sN;twebp;c890;gc/porsche-small.webp",
        "title": "Taycan",
        "price": "from INR 18,942,000"
    },
    {
        "image": "https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-panamera/small/06c7f690-0b8d-11ef-8128-005056bbdc38;sN;twebp;c890;gc/porsche-small.webp",
        "title": "Panamera",
        "price": "from INR 16,962,000"
    },
    {
        "image": "https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-macan/small/06c7f690-0b8d-11ef-8128-005056bbdc38;sN;twebp;c890;gc/porsche-small.webp",
        "title": "Macan",
        "price": "from INR 9,605,000"
    },
    {
        "image": "https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-cayenne/small/06c7f690-0b8d-11ef-8128-005056bbdc38;sN;twebp;c890;gc/porsche-small.webp",
        "title": "Cayenne",
        "price": "from INR 14,248,000"
    }
]



export default function Purchase() {
    return (
        <div className='purchase'>
            <Homenavbar />
            <div className='row'>
                {modelData.map((model, index) => (
                    <div className='col-xs-12 col-xl-4'>
                        <ModelCard
                            key={index}
                            image={model.image}
                            title={model.title}
                            price={model.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
