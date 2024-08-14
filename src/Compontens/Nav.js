import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Nav = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <Container>
    <div className={color ? "header header-bg": "header"}>
   
    <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
  
   </div>
   </Container>
  );
};


const Container = styled.div`


.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    position: fixed;
    width: 100%;
    height: 40px;
    z-index: 10;
  }
  .header-bg{
    background-color: rgba(0, 0, 0, 0.85);
    transition: 0.5s;
  }
  body{
    background-color: black;
  }
  body::-webkit-scrollbar {
    width: 4px;
  }
  
  body::-webkit-scrollbar-track {
    background-color: black;
  }
  
  body::-webkit-scrollbar-thumb {
    background: black;
  }
  
  .nav-menu{
    display: flex;
    position: relative;
    left: 30%;
  }
  ul{
    list-style: none;
  
  }
  .nav-menu li{
    padding: 0 1rem;
  }
  .nav-menu li a{
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
    color: white;
    transition: 0.5s;
  }
  .nav-menu li a:hover{
    color:#fff ;
    text-decoration: underline;
  }
  h1{
    color: white;
  }
  


  
/* Styles for screens smaller than or equal to mini iPad width in landscape mode */
@media screen and (max-width: 820px) {
    .nav-menu li a{
      font-size: 5rem;
    }
  }
  
  
  
  @media screen and (max-width: 1040px)
  
  {
    .nav-menu{
      flex-direction: row;
      justify-content: top;
      align-items: top;
      width: 100%;
   
       gap: 1rem;
      position: absolute;
      top: 0;
      left: 10%;
     z-index: -3;
      transition: 0.3s;
    }
   
    .nav-menu li{
      padding: 1rem 0;
    }
    .nav-menu li a{
      font-size: 1rem;
    }
  
  }

`;

export default Nav;
