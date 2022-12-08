 
export default function FavoritesDetails({id, name, image}) {

  return (
    <div>
      <h3>{id}</h3>
      <h2>{name}</h2>>
      <img src={image} alt={name} />
    </div>
  )
};