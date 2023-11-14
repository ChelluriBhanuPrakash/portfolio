import React, { useState } from 'react'
import './About.css'
import User from '../../assets/user.png'

const About = () => {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);

  const toggleDiv1 = () => {
    setShowDiv1(true);
    setShowDiv2(false);
  };

  const toggleDiv2 = () => {
    setShowDiv1(false);
    setShowDiv2(true);

  };
  return (
    <div>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1" >
              <img src={User} alt="User Profile" id='user' />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p><span className='start'>To get placed in an
                organization where I can
                increase my knowledge and
                can prove myself as a good
                individual and a good
                employee which helps in the
                company growth and also my
                individual development.</span>
                I am a skilled and passionate web designer with
                expirence in creating visually appealing and
                user-friendly websites. I have a strong understanding
                of design and a keen eye for detail. I am a
                proficient in HTML,CSS,JavaScript,React js, as well as design
                software such as Adobe Illustrator, Photoshop and Figma.
              </p>
              <div className="tab-titles">
                <p className="tab-links active-link" onClick={toggleDiv1}>Skills</p>
                <p className="tab-links active-link1" onClick={toggleDiv2}>Education</p>
              </div>
              {showDiv1 &&
                <div className="tab-contents active-tab" id="skills">
                  <div id='main-skills'>
                    <div className='tech-skills'>
                      <li>HTML </li>
                      <li>CSS</li>
                      <li>BOOTSTRAP</li>
                      <li>JavaScript</li>
                      <li>ReactJS</li>
                    </div>
                    <div className='design-skills'>
                      <li>Git</li>
                      <li>Illustrator</li>
                      <li>Photoshop</li>
                      <li>XD</li>
                      <li>Figma</li>
                    </div>
                  </div>
                </div>}
              {showDiv2 &&
                <div className="tab-contents" id="education">
                  <li><span>2023</span><br />UI/UX Design Training at Tech Mahindra Foundation</li>
                  <li><span>2020-2023</span><br />B-Tech in Raghu Institute Of Technology</li>
                  <li><span>2017-2020</span><br />Diploma in Sanketika Polytechnic College</li>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
