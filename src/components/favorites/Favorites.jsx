import { connect } from "react-redux";
import FavoritesDetails from "../details/FavoritesDetails";

export function Favorites ({myFavorites}) {
  return (
    <div>
      {myFavorites?.map(fav => 
      //   return {
      //   <h3>{fav.id}</h3>
      //   <h2>{fav.name}</h2>
      //   <img src={fav.image} />
      // })
      <FavoritesDetails
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
