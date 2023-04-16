import React from 'react';
import iplLogo from './trophy.webp';
import iplImage1 from './sun.jpeg';
import iplImage2 from './mum.png';
import iplImage3 from './rcb.webp';
import './Landing.css';

function Landing() {
  return (
    <div className="landing">
      <h1 className="title" style={{color: "#F0F0F0"}}>Welcome to IPL Hub</h1>
      <p className="subtitle" style={{color: "#F0F0F0"}}>Get the latest news, scores, and updates on IPL</p>
      <img src={iplLogo} alt="IPL Logo" className="logo1" />
      <h3 style={{color: "#F0F0F0"}}>IPL ANTHEM</h3>
      <div className="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/o8jhKCp1liQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <h3 style={{color: "#F0F0F0"}}>Some of the Teams</h3>
      <div className="gallery">
        <img src={iplImage1} alt="IPLImage1" className="image1" />
        <img src={iplImage2} alt="IPLImage2" className="image1" />
        <img src={iplImage3} alt="IPLImage3" className="image1" />
      </div>
    </div>
  )
}

export default Landing;
