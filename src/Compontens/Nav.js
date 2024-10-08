import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Nav = () => {
  const [color, setColor] = useState(false);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

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
      <div className={color ? "header header-bg" : "header"}>
        <ul className="nav-menu">
          <li><a onClick={() => handleScrollToSection('home')}>Home</a></li>
          <li><a onClick={() => handleScrollToSection('about')}>About Me</a></li>
          <li><a onClick={() => handleScrollToSection('skill')}>Skills</a></li>
          <li><a onClick={() => handleScrollToSection('project')}>Projects</a></li>
          <li><a onClick={() => handleScrollToSection('contact')}>Contact Me</a></li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div`
  html {
    scroll-behavior: smooth; /* Smooth scrolling for the entire document */
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    position: fixed;
    width: 100%;
    height: 40px;
    z-index: 10;
  }

  .header-bg {
    background-color: rgba(0, 0, 0, 0.85);
    transition: 0.5s;
  }

  body {
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

  .nav-menu {
    display: flex;
    position: relative;
    left: 30%;
  }

  ul {
    list-style: none;
  }

  .nav-menu li {
    padding: 0 1rem;
  }

  .nav-menu li a {
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
    color: white;
    cursor: pointer;
    transition: 0.5s;
  }

  .nav-menu li a:hover {
    color: #fff;
    text-decoration: underline;
  }

  h1 {
    color: white;
  }

  @media screen and (max-width: 820px) {
  
   .nav-menu{
    display: none;
   }
  }

  @media screen and (max-width: 1040px) {
    .nav-menu{
    display: none;
   }
  }
`;

export default Nav;
