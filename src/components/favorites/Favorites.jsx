import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import FavoritesDetails from "../details/FavoritesDetails";
import styled from './Favorites.module.css';

export function Favorites ({myFavorites}) {

  const dispatch = useDispatch();

  function handleOrder (e) {
    e.preventDefault();
    dispatch(orderCards(e.target.value));
  }

  function handleGender(e) {
    e.preventDefault();
    dispatch(filterCards(e.target.value));
  }

  return (
    <div>
      <div className={styled.Filters}>
        <select name="" id=""  onClick={handleOrder}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendiente</option>
        </select>
        <select name="" id=""  onClick={handleGender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unkown</option>
        </select>
      </div>
      <div className={styled.Favorites}>
      {myFavorites?.map(fav => 
      <FavoritesDetails
        key={fav.id}
        id={fav.id}
        name={fav.name}
        image={fav.image}
      />
      )}
      </div>
    </div>
  )
}

export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }
};

export default connect(mapStateToProps)(Favorites);
