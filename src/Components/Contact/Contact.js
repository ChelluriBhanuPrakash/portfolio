import React, { useState } from 'react'
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs'
import { BiSolidPhone } from 'react-icons/bi'
import { SiGmail } from 'react-icons/si'
import './Contact.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CopyRight from '../CopyRights/CopyRight'


const Contact = () => {

  const [data, setData] = useState({
    yourName: '',
    email: '',
    message: '',
  })
  const { yourName, email, message } = data

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const submitHandler = e => {
    e.preventDefault();
    axios.post('https://contact-me-8bdfc-default-rtdb.firebaseio.com/register.json',
      data).then(() => alert("Sent Successfully"));
    setData({
      yourName: '',
      email: '',
      message: '',
    });
  }

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row-1">
            <div className="contact-left">
              <center>
                <h1 className="sub-title">Contact Me</h1>
                <p className='email-slide'><Link to="https://mail.google.com/mail/?view=cm&fs=1&to=bhanu17221@gmail.com" target='_blank' rel="noopener noreferrer"><span><SiGmail className='icon' /></span>bhanu17221@gmail.com</Link></p>
                <p className='phone-slide'><span><BiSolidPhone className='icon phone' /></span>9030400669</p>
                <div className="social-icons">
                  <Link to="https://www.linkedin.com/in/bhanuprakash17221" target='_blank' rel="noopener noreferrer"><BsLinkedin className='lin' /></Link>
                  <Link to="https://github.com/ChelluriBhanuPrakash" target='_blank' rel="noopener noreferrer"><BsGithub className='lin' /></Link>
                  <Link to="https://wa.me/919030400669" target='_blank' rel="noopener noreferrer"><BsWhatsapp className='lin'/></Link>
                </div>
                <Link to="" target='_blank' rel="noopener noreferrer" className="btn btn2">Download CV</Link>
                {/* <a href='./images/user-1.png' download='pdf'>download</a> */}
              </center>
            </div>
            <div className="contact-right">
              <form onSubmit={submitHandler}>
                <input className='i1' type="text" name="yourName" value={yourName} placeholder="Your Name" onChange={changeHandler} required />
                <input className='i2' type="email" name="email" value={email} placeholder="Your Email" onChange={changeHandler} required />
                <textarea className='i3' name="message" value={message} rows="6" placeholder="Your Message" onChange={changeHandler}></textarea>
                <center>
                  <button type="submit" name='submit' className="btn btn2">Submit</button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
      <CopyRight/>
    </div>
    
  )
}

export default Contact
