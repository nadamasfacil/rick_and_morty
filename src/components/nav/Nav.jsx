import {Link} from 'react-router-dom';
import styled from './Nav.module.css';
import SearchBar from '../searchbar/SearchBar.jsx';

export default function Nav (props) {

  const handleOut = ()=> {
    props.logout();
  }
  return (
    <div className={styled.Navl}>
      <div className={styled.NavLinks} >
        <Link className={styled.barli} to='/home' ><h3>Home</h3></Link>
        <Link className={styled.barli} to='/about' ><h3>About</h3></Link>
      </div>
      <div className={styled.BarLinks} >
        <SearchBar
          onSearch={props.onSearch}
        />  
        <button className={styled.Btn} 
        onClick={props.onRandom}>Random</button>
        <button className={styled.BtnOut} 
        onClick={handleOut}>Logout</button>
      </div>
    </div>
  )  
}
