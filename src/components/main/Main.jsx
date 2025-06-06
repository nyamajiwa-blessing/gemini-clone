import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" srcset="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>What do you want to learn today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores deserunt odit consectetur minus nulla veniam? Harum vero unde culpa!</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores deserunt odit consectetur minus nulla veniam? Harum vero unde culpa!</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores deserunt odit consectetur minus nulla veniam? Harum vero unde culpa!</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores deserunt odit consectetur minus nulla veniam? Harum vero unde culpa!</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" name="search" id="" placeholder='Enter a prompt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">AI generated. Please verify the content.</p>
            </div>
        </div>
    </div>
  )
}

export default Main