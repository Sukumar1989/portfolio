import React from 'react';
import './component_css/HomePage.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import NavBar from './NavBar';


function HomePage() {
    const [text] = useTypewriter({
      words: ['Front End Developer', 'Email Template Developer'],
      loop: {},
    })


  return (
    <>
    <NavBar/>
    <div className="container mx-auto py-4 px-4 sm:container sm:mx-auto" >
        <h1 className="text-3xl font-bold">
        Hi! 
        I'm Sukumar
        </h1>
        <p style={{fontSize:'1.3rem',}}>I'm <span style={{fontWeight:'500', fontSize:'1.3rem'  ,color:'#123c69'}}>{text}</span> <cursor/>  </p>

    </div>
    </>
  );
}

export default HomePage;