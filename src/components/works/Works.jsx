import './works.scss'
import { useState } from 'react'
import icon1 from '../../assets/mobile.png'
import img1 from '../../assets/arrow.png'
import img2 from '../../assets/arrow.png'
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: "1",
      title: "Watches App",
      desc:
        " you can buy any watch you want, and any time in a smooth way. You will find more down below.",
      img:
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80",
    },
    {
      id: "2",
      title: "Education App",
      desc:
        "You can find your expert tutor easily from anywhere. For more information scroll to down below.",
      img:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80",
    },
    {
      id: "3",
      title: "More Info",
      desc:
        "You can find more info in the section below.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ]
  const handleClick = (way) => {
    way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1: 0)
  }
  return (
    <div className='works' id='works'>
      <div className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d)=>(
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={icon1} alt='' />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
           
          </div> ))}
      </div>
      <img src={img1} className='arrow left' alt='' onClick={()=>handleClick('left')}/>
      <img src={img2} className='arrow right' alt='' onClick={()=>handleClick()}/>
    </div>
  )
}
