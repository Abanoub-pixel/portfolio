import './works.scss'
import {useState} from 'react'
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Pro Shop",
      desc:
        "E-Commerce React web application that you can buy anything you want, and any time",
      img:
        "assets/s.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Wheather App",
      desc:
        "Weather React app that is forecasting the temperature for you anywhere.",
      img:
        "assets/preview.png",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
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
                    <img src={d.icon} alt='' />
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
      <img src='assets/arrow.png' className='arrow left' alt='' onClick={()=>handleClick('left')}/>
      <img src='assets/arrow.png' className='arrow right' alt='' onClick={()=>handleClick()}/>
    </div>
  )
}
