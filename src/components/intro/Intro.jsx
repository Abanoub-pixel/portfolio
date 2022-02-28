import './intro.scss'
import {init} from 'ityped'
import { useEffect, useRef } from 'react'
export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 50,
      strings: ["Developer", "Designer"]
   })
  },[])
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
        <img src='assets/a.png' alt='man image'/>
        </div>
      </div>
     <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Abanoub Milad</h1>
          <h3>Freelance web <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
        <img src="assets/down.png" alt="img" />
        </a>
      </div>
    </div>
  )
}
