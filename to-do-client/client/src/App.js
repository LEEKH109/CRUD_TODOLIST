import React from 'react';
import './App.css';
import IconArea from './components/IconArea';
import Header from './components/Header';
import Footer from './components/Footer';
import IconCarrier from './components/IconCarrier';
import Functionbar from './components/Sidebar';


function App() {
  return (
    <div className='sidebar'>
      <div >
        <IconArea/>
        <Header/>
        <IconCarrier/>
        <Footer/>
      </div>
      <Functionbar/>
    </div>
  );
}

export default App;
