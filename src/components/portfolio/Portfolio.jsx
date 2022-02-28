import { useState, useEffect } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import '../../data'
import {designPortfolio,  webPortfolio } from '../../data'

export default function Portfolio() {
  const [selected, setSelected] = useState('web')
  const [data, setData]  = useState([])
  const list = [
   
    {
      id: 'web',
      title: 'Web App'
    },
  
    {
      id: 'design',
      title: 'Design'
    },
  
  
  ];
  useEffect(() => {
    switch (selected) {
    
      case 'web':
        setData(webPortfolio);
        break;
    
      case 'design':
        setData(designPortfolio);
        break;
  
      default: setData(webPortfolio)
        
    }
  }, [selected]);
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>(
          <PortfolioList title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          id = {item.id}
          />
       ))}
        </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
           <a href={d.link} target="blank" >
          <img src={d.img} alt="" />
         </a>
            <h3>{d.title}</h3>
      </div>

        ))}
         
        </div>
      

    </div>
  )
}
