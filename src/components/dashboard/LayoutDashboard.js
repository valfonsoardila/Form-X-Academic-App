import React from 'react';
import './LayoutDashboard.css';
import Sidebar from './sidebar/Sidebar';
import Container from './container/Container';
import { resources } from "../../assets/resources";

const LayoutDashboard = ({children}) => {
  return (
    <div className='main-container' style={{ backgroundImage: `url(${resources.bgDashboard})` }}>
      <div className='containerdash'>
        <Sidebar />
        <div className='container-content'>
          <Container>{children}</Container>
        </div>
      </div>
    </div>
  )
}

export default LayoutDashboard