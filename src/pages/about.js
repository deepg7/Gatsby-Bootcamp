import React from "react";
import {Link} from 'gatsby'
import Footer from '../components/footer'
import Header  from "../components/header";
const About = () =>{
    return(
        <div>
            <Header/>
            <h1>About Me</h1>
            <p>I am a student at VIT</p>
            <p>Need a developer? <Link to="/contact">Contact me</Link></p>
            <Footer/>
        </div>
    )
}

export default About