import styled from './Cards.module.css'
import Card from '../card/Card.jsx';

export default function Cards(props) {
  const  {personas, onClose} = props;
  return (
    <div className={styled.Cards}>
      {personas.map((ele)=><Card 
        cls="true"
        id={ele.id}
        name={ele.name}
        species={ele.species}
        gender={ele.gender}
        image={ele.image}
        onClose={() => onClose(ele.id)}
        key={ele.id} />)}
    </div>
  )
}
