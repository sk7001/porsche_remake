import React from 'react';
import Homenavbar from '../../components/Navbar/Homenavbar';
import './Home.css';
import Modelnavbar from '../../components/Modelnavbar/Modelnavbar';
import Modelcard from '../../components/Cards/Modelcard';

export default function Home() {
    return (
        <div>
            <Homenavbar />
            <div className='top-video'>
                <h1>All New Porsche GT3RS</h1>
                <p>The Porsche 911 GT3 RS is an athlete both on and off the track, featuring a lightweight construction and incredible attention to detail, making it an aerodynamic wonder.</p>
                <video
                    autoPlay
                    loop
                    src={require('../../assets/videos/gt3rs.mp4')}
                    alt="New Porsche GT3RS"
                    className=''
                    style={{
                        backgroundColor: "grey",
                        width: "100%",
                        height: "70vh",
                        objectFit: "cover",
                    }}
                />
            </div>
            <Modelnavbar />
            <div className='row'>
                <div className='col-xs-12 col-md-6 col-xl-4'><Modelcard /></div>
                <div className='col-xs-12 col-md-6 col-xl-4'><Modelcard /></div>
                <div className='col-xs-12 col-md-6 col-xl-4'><Modelcard /></div>
            </div>

        </div>
    );
}