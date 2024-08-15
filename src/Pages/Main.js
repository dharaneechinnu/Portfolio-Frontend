import React from 'react'
import Nav from '../Compontens/Nav'
import Home from '../Compontens/Home'
import Abot from '../Compontens/Abot'
import Skill from '../Compontens/Skill'
import Contact from '../Compontens/Contact'
import Footer from '../Compontens/Footer'
import Project from '../Compontens/Project'
import styled from 'styled-components'
const Main = () => {
  return (
   <Container>
   
     <Nav/>
     <Home/>
     <Abot/>
     <Skill/>
     <Project/>
     <Contact/>
     <Footer/>

   </Container>
  )
}
const Container =styled.div`
width: 100vw;

`
export default Main