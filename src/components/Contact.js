import React from "react";
import "./Contact.css";
import image from "./image2.png";

function Contact() {
  const handleSubmit= () => {
  alert("successfully details are recorded")
  };
  return (
    <div className="page">
    <div className="Contact">
    <div className="location">
      <div className="card sm" >
        <img className="card-img-top" src={image} alt="ipl" />
        <div className="card-body">
          <h3 className="card-title" style={{ textAlign: "center" }}>
            location
          </h3>
          <div>
            <h4>Address :</h4>
            <p>
              Stadium Rd, Habsiguda, Uppal, Hyderabad, Telangana 500007
            </p>
            <h4>Capacity :</h4>
            <p>55,000</p>
            <h4>Association Name :</h4>
            <p>Hyderabad Cricket Association</p>
          </div>
        </div>
      </div>
      </div>
      <div className="contact1">
        <h3  style={{ textAlign: "center" }}>contact</h3>
        <h4>All India Number(s):</h4>
        <p> 99203 67847 (For Support) 040-271 77 842 (For Alternative Support)29</p>
       
        </div>
        <div className="contact2">
          <h3 style={{ textAlign: "center" }}>Email</h3>
          <p>uppalstadium@gmail.com</p>
        </div> 
      </div>
      <form className="contactform" onSubmit={handleSubmit}>
        <h3>ContactForm</h3>
                <div className="sameline">
                    <p>Name : </p>
                    <input type="text" id="name" placeholder=" name" />
                </div>
                <div className="sameline">
                    <p>Email :   </p>
                    <input type="email" id="email" placeholder=" Email"/>
                </div>
                <div className="sameline">
                    <p>Phone : </p>
                    <input type="text" id="Mobile" placeholder=" Phone" />
        </div>
        <button id="myButton">send</button>
        </form>
    </div>
   
  );
}

export default Contact;