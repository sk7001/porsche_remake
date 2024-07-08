import React from 'react';
import Homenavbar from '../../components/Navbar/Homenavbar';
import './Home.css';
import videoSrc from '../../assets/videos/gt3rs.mp4';
import Introcard from '../../components/Introcard/Introcard';

const modelData = [
    {
        "image": "https://i.cdn.newsbytesapp.com/images/l28620230506142001.jpeg",
        "title": "718",
        "price": "from INR 14,772,000"
    },
    {
        "image": "https://i.cdn.newsbytesapp.com/images/l40620240312174646.jpeg",
        "title": "911",
        "price": "from INR 19,899,000"
    },
    {
        "image": "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2024/Products/The-new-Taycan/01_Taycan_Group_Shot.jpg/jcr:content/01_Taycan_Group_Shot.jpg",
        "title": "Taycan",
        "price": "from INR 18,942,000"
    },
    {
        "image": "https://files.porsche.com/filestore/image/middle-east/none/homepage-banner-india-new-panamera/normal/1e6bccd6-183c-11ef-812b-005056bbdc38;sK;twebp/porsche-normal.webp",
        "title": "Panamera",
        "price": "from INR 16,962,000"
    },
    {
        "image": "https://www.drivencarguide.co.nz/media/divczux4/img_14.jpg",
        "title": "Macan",
        "price": "from INR 9,605,000"
    },
    {
        "image": "https://m.atcdn.co.uk/ect/media/%7Bresize%7D/33b68853b0714d4dafa70c83a8a03aa8.jpg",
        "title": "Cayenne",
        "price": "from INR 14,248,000"
    }
]

export default function Home() {
    return (
        <div className='body'>
            <div className='top-video'>
                <h1>All New Porsche GT3RS</h1>
                <p>The Porsche 911 GT3 RS is an athlete both on and off the track, featuring a lightweight construction and incredible attention to detail, making it an aerodynamic wonder.</p>
                <video
                    autoPlay loop muted
                    src={videoSrc}
                    alt="New Porsche GT3RS"
                    className=''
                    style={{
                        backgroundColor: "grey",
                        width: "100%",
                        height: "100vh",
                        objectFit: "cover",
                    }}
                />
            </div>
            <div className='content'>
                <Homenavbar />
                <div className='introrow'>
                    {modelData.map((model, index) => (
                        <div className='model' key={index}>
                        <Introcard
                            key={index}
                            image={model.image}
                            title={model.title}
                            price={model.price}
                        />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
