import {Link} from 'react-router-dom';
import styled from './Card.module.css';

export default function Card(props) {
  if (props.cls) {
    return (
      <div className={styled.Card}>
        <button onClick={props.onClose}>X</button>
        <Link to={`/details/${props.id}`}>
          <h2>{props.name}</h2>
        </Link>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
        <img src={props.image} alt={props.name} /> 
      </div>
    );
  }
  return (
    <div className={styled.Cls}>
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} /> 
    </div>
  );      
}
