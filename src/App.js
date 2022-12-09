import React, { useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Form from './components/forms/Form.jsx';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx'
import Details from './components/details/Details.jsx';
import Favorites from './components/favorites/Favorites.jsx';
import logo from './logonadamasfaciltransparente2.png';
import logoMobil from './nadamasfacil-negro.jpg';
import { delete_favorites } from './redux/actions';

export default function App () {

  const [personas,setPersonas] = React.useState([]);

  const [access, setAccess] =React.useState(false);

  const userName = 'nada@gmail.com';
  const passWord = '123456';
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const dispatch = useDispatch();

  function onSearch(char) {
    console.log(searchChar(char));
    if (!searchChar(char)) {
      fetch(`https://rickandmortyapi.com/api/character/${char}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
              setPersonas((personas) => [...personas, data]);
          } else {
              window.alert('No hay personajes con ese ID');
          }
        }
      );
      } else {
        window.alert('Ya agregaste a este personaje');        
      }
      console.log('personas');
      console.log(personas);
  }

  function searchChar(dat) {
    for (let i=0; i<personas.length; i++) {
      if (parseInt(personas[i].id) === parseInt(dat)) {return true;}
    }
    return false;
  }

  function onRandom() {
    const varRandom = Math.floor(Math.random()*825+1);
    onSearch(varRandom);
  }

  function onClose(char) {
    setPersonas(personas.filter((ele) => ele.id !== char));
    dispatch(delete_favorites(char));
  }

  function islogin(userData) {
    if (userData.username === userName && userData.password === passWord){
      setAccess(true);
      navigate('/home');
    } else alert('Datos incorrectos');
  }

  function islogout() {
      setAccess(false);
  }

  useEffect(()=>{
    !access && navigate('/');
    // eslint-disable-next-line
  },[access]);

  return (
    <div className='App'>
      <header>
        <img className='verLogo' src={logo} alt="nadamasfacilpuntocom" />
        <img className='verLogoMobil' src={logoMobil} alt="nadamasfacilpuntocom" />
        <h1>Rick and Morty</h1>
      </header>
      <section className='cardContainer'>
        {location.pathname !== '/' &&
        (<Nav onSearch={onSearch} onRandom={onRandom} logout={islogout} />)}
        <Routes>
          <Route path='/' element={<Form login={islogin} />} />
          <Route path='/home' element={
            <Cards
            personas={personas}
            onClose={onClose} />}
          />
          <Route path='/about' element={<About />} />
          <Route path='/details/:detailId' element={<Details />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
        <br/><br/><br/>
      </section>
      <footer></footer>
    </div>
  )
}

// created
// : 
// "2017-11-04T19:22:43.665Z"
// episode
// : 
// (42) ['https://rickandmortyapi.com/api/episode/6', 'https://rickandmortyapi.com/api/episode/7', 'https://rickandmortyapi.com/api/episode/8', 'https://rickandmortyapi.com/api/episode/9', 'https://rickandmortyapi.com/api/episode/10', 'https://rickandmortyapi.com/api/episode/11', 'https://rickandmortyapi.com/api/episode/12', 'https://rickandmortyapi.com/api/episode/14', 'https://rickandmortyapi.com/api/episode/15', 'https://rickandmortyapi.com/api/episode/16', 'https://rickandmortyapi.com/api/episode/18', 'https://rickandmortyapi.com/api/episode/19', 'https://rickandmortyapi.com/api/episode/20', 'https://rickandmortyapi.com/api/episode/21', 'https://rickandmortyapi.com/api/episode/22', 'https://rickandmortyapi.com/api/episode/23', 'https://rickandmortyapi.com/api/episode/24', 'https://rickandmortyapi.com/api/episode/25', 'https://rickandmortyapi.com/api/episode/26', 'https://rickandmortyapi.com/api/episode/27', 'https://rickandmortyapi.com/api/episode/28', 'https://rickandmortyapi.com/api/episode/29', 'https://rickandmortyapi.com/api/episode/30', 'https://rickandmortyapi.com/api/episode/31', 'https://rickandmortyapi.com/api/episode/32', 'https://rickandmortyapi.com/api/episode/33', 'https://rickandmortyapi.com/api/episode/34', 'https://rickandmortyapi.com/api/episode/35', 'https://rickandmortyapi.com/api/episode/36', 'https://rickandmortyapi.com/api/episode/38', 'https://rickandmortyapi.com/api/episode/39', 'https://rickandmortyapi.com/api/episode/40', 'https://rickandmortyapi.com/api/episode/41', 'https://rickandmortyapi.com/api/episode/42', 'https://rickandmortyapi.com/api/episode/43', 'https://rickandmortyapi.com/api/episode/44', 'https://rickandmortyapi.com/api/episode/45', 'https://rickandmortyapi.com/api/episode/46', 'https://rickandmortyapi.com/api/episode/47', 'https://rickandmortyapi.com/api/episode/48', 'https://rickandmortyapi.com/api/episode/49', 'https://rickandmortyapi.com/api/episode/51']
// gender
// : 
// "Female"
// id
// : 
// 4
// image
// : 
// "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
// location
// : 
// {name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20'}
// name
// : 
// "Beth Smith"
// origin
// : 
// {name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20'}
// species
// : 
// "Human"
// status
// : 
// "Alive"
// type
// : 
// ""
// url
// : 
// "https://rickandmortyapi.com/api/character/4"