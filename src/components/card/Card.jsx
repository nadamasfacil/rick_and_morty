import {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {add_favorites, delete_favorites} from '../../redux/actions';
import styled from './Card.module.css';

function Card(props) {

  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.delete_favorites(props.id);
    } else {
      setIsFav(true);
      props.add_favorites(props);
      // props.add_favorites({id: props.id, name : props.name, image: props.image});
    }
  }

  useEffect(() => {
    // props.myFavorites.forEach((fav) => {
    //   if (fav.id === props.id) {
    //     setIsFav(true);
    //   }
    // });
    for (let fav of props.myFavorites) {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    }
  // eslint-disable-next-line
  }, [props.myFavorites]);

  return (
    <div className={styled.Card}>
      {
          <button className={styled.cardFavorite} onClick={handleFavorite}>{isFav
            ? '❤️' : '🤍'}</button>
      }
      <button className={styled.cardDelete} onClick={props.onClose}>X</button>
      <Link className={styled.h2Link} to={`/details/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <img src={props.image} alt={props.name} /> 
    </div>
  );
}

export function mapStateToProps (state) {
  return {
    myFavorites: state.myFavorites,
  }
}

export function mapDispatchToProps (dispatch) {
  return {
    add_favorites: (data) => dispatch(add_favorites(data)),
    delete_favorites: (id) => dispatch(delete_favorites(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);