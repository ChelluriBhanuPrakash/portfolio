import React, { useState } from 'react'
import './Work.css'
import { RiShareBoxFill } from 'react-icons/ri'
import Car from '../../assets/work-1.png'
import Ytclone from '../../assets/work-2.png'
import Quiz from '../../assets/work-3.png'
import Site from '../../assets/work-4.png'
import Solarsystem from '../../assets/work-5.png'
import Todo from '../../assets/work-6.png'
import { Link } from 'react-router-dom'

const Work = () => {

    const [next, setNext] = useState(false)
    const [button,setButton] = useState(true)
    const Work = () => {
        setNext(true)
        setButton(false)
    }

    return (
            <div id="work">
                <div className="container">
                    <h1 className="sub-title">My Work</h1>
                    <div className="work-list">
                        <div className="work work-1">
                            <img src={Site} alt="Basic Animations Web-Template" />
                            <div className="layer">
                                <h1>Web-page Developed using React</h1>
                                <p>Created a Web-page with basic animations,<br />Background changes when hovered on the images.</p>
                                <Link to="https://chelluribhanuprakash.github.io/bhanu_page/" target="_blank" rel="noopener noreferrer"><RiShareBoxFill className='icon' /></Link>
                            </div>
                        </div>
                        <div className="work work-2">
                            <img src={Todo} alt="Youtube Clone" />
                            <div className="layer">
                                <h1>Tado Application</h1>
                                <p>Created a Todo application Using React. <br />The Width and height of the application increases based on the task added </p>
                                <Link to="https://chelluribhanuprakash.github.io/todoapp/" target="_blank" rel="noreferrer"><RiShareBoxFill className='icon' /></Link>
                            </div>
                        </div>
                        <div className="work work-3">
                            <img src={Quiz} alt="Quiz Site" />
                            <div className="layer">
                                <h1>Basic Quiz site</h1>
                                <p>This site has four simple questions which is create by using javascript.</p>
                                <Link to="https://chelluribhanuprakash.github.io/js-quiz/" target='_blank' rel="noreferrer"><RiShareBoxFill className='icon' /></Link>
                            </div>
                        </div>
                    </div>
                    {next &&
                        <div className="work-list">
                            <div className="work work-1">
                                <img src={Car} alt="Basic Animations Web-Template" />
                                <div className="layer">
                                    <h1>Basic Animations Web-Template</h1>
                                    <p>Created a Web-Template <br />with basic animations.</p>
                                    <Link to="https://chelluribhanuprakash.github.io/animations/" target="_blank" rel="noopener noreferrer"><RiShareBoxFill className='icon' /></Link>
                                </div>
                            </div>
                            <div className="work work-2">
                                <img src={Ytclone} alt="Youtube Clone" />
                                <div className="layer">
                                    <h1>Youtube Clone</h1>
                                    <p>Created a Youtube clone using HTML,CSS,JavaScript. <br /> By clicking on the First thumbnail u will redirect to another page. </p>
                                    <Link to="https://chelluribhanuprakash.github.io/cloneyt/" target="_blank" rel="noreferrer"><RiShareBoxFill className='icon' /></Link>
                                </div>
                            </div>
                            <div className="work work-3">
                                <img src={Solarsystem} alt="Quiz Site" />
                                <div className="layer">
                                    <h1>Solar System</h1>
                                    <p>Created a basic Solar-System using HTML,CSS.</p>
                                    <Link to="https://chelluribhanuprakash.github.io/solarsystem/" target='_blank' rel="noreferrer"><RiShareBoxFill className='icon' /></Link>
                                </div>
                            </div>
                        </div>
                    }

                </div>
                <center>
                    {/* <Link to="https://github.com/ChelluriBhanuPrakash" target='_blank' rel="noopener noreferrer" className="button" >See More</Link> */}
                    {button && <Link onClick={Work} className="button" >See More</Link>}
                </center>
            </div>
    )
}

export default Work
