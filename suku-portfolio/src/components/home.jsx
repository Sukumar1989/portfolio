import React from 'react';
import './component_css/HomePage.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter'


function HomePage() {
    const [text] = useTypewriter({
      words: ['Front End Developer', 'Email Template Developer'],
      loop: {},
    })


  return (
    <div className="container mx-auto py-4 px-4 sm:container sm:mx-auto" >
        <h1 className="text-3xl font-bold">
        Hi! 
        I'm Sukumar
        </h1>
        <p>I'm <span style={{fontWeight:'500', color:'green'}}>{text}</span> <cursor/>  </p>

    </div>
  );
}

export default HomePage;