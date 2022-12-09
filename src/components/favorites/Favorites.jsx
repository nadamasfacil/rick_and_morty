import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import FavoritesDetails from "../details/FavoritesDetails";

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
      <div>
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
      {myFavorites?.map(fav => 
      <FavoritesDetails
        key={fav.id}
        id={fav.id}
        name={fav.name}
        image={fav.image}
      />
      )}
    </div>
  )
}

export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }
};

export default connect(mapStateToProps)(Favorites);
