import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
import {Calendar, Facebook, Heart, Instagram, Mail, MapPin, PhoneCall, Twitter, User } from "react-feather";
const Footer = () => {
  const Message = ()=>{
    alert("Mail Id Sent");
  }
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tuned and get the latest updates</h1>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <button onClick={Message} style={{fontSize:"12px",marginTop:"-2%"}}>Send</button>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>E-LEARNING</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <Facebook/>
            <Twitter/>
            <Instagram/>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span style={{fontSize:"10px"}}>
                    <Calendar/>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span style={{fontSize:"10px"}}>
                    <User/>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Please reach us at any of the below contacts in case of any query</h3>
            <ul>
              <li>
                <MapPin/>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <PhoneCall/>
                +2 392 3929 210
              </li>
              <li>
                <Mail/>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved by E-Learning
        </p>
      </div>
    </>
  )
}

export default Footer