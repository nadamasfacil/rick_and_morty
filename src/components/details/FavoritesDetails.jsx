import styled from './FavoritesDetails.module.css';

export default function FavoritesDetails({id, name, image}) {

  return (
    <div className={styled.Details}>
      <h3>{id}</h3>
      <h2>{name}</h2>>
      <img src={image} alt={name} />
    </div>
  )
};