import React from "react";
import "./About.css"
import image1 from "./1.png"
import image2 from "./2.jpg"
import image3 from "./3.jpeg"
function About() {
  return (
    // <div className="about">
    //   <div className="history">
    //     <h3>History of ipl</h3>
    //     <p>
    //       On 13 September 2007, on the back of India's victory at the 2007 T20
    //       World Cup, BCCI announced a franchise-based Twenty20 cricket
    //       competition called Indian Premier League. The first season was slated
    //       to start in April 2008, in a "high-profile ceremony" in New Delhi.
    //     </p>
    //   </div>
    // </div>
    <div className="about">
      <div className="about1">
    <div className="card" style={{ width:"35rem" }}>
  <div className="card-body">
    <h3 className="card-title" style={{textAlign:"center"}}>History of ipl</h3>
    <p className="card-text">On 13 September 2007, on the back of India's victory at the 2007 T20
           World Cup, BCCI announced a franchise-based Twenty20 cricket
           competition called Indian Premier League. The first season was slated
         to start in April 2008, in a "high-profile ceremony" in New Delhi.</p>
  </div>
        </div>
      </div>
      <h3 style={{color:" #F0F0F0"}}>Some related images</h3>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner"  >
    <div className="carousel-item active"  >
            <img className="d-block w-100" src={image1} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
    <h5>All teams</h5>
  </div>
    </div>
    <div className="carousel-item">
            <img className="d-block w-100" src={image2} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
    <h5>All Team Captains</h5>
  </div>
            
    </div>
    <div className="carousel-item"  >
      <img className="d-block w-100" src={image3 } alt="Third slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>Champions</h5>
  </div>

    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      </div>
  
    
  );
}

export default About;
