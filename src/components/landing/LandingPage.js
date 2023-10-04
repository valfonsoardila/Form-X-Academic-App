import React,{useState} from 'react'
import { resources } from '../../assets/resources';
import Hader from '../landing/header/Header';
import './LandingPage.css';

const LandingPage = () => {
  const [headerBackground, setHeaderBackground] = useState("transparent");
  return (
    <div className='maincontainer' style={{ backgroundImage: `url(${resources.bg})` }}>
      <Hader backgroundColor={headerBackground}/>
    </div>
  )
}

export default LandingPage