import './portfolioList.scss';

export default function PortfolioList({title,setSelected,active,id}) {
    return (
        <li 
        className={active ? 'portfolioList active':
         'portfolioList'}
          onClick={()=>setSelected(id)}>
      {title}
    </li>
  )
}
