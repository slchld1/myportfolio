import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Information.css';
import Footer from '../Footer';


function Information() {
    return(
        <Container className='container'>

        <section className="body">
            
            <h1>Hello! My name is Minjae Cho.</h1>
                <h4>I graduated from a</h4> 
                <h3 className="bold-text">Full Stack Flex Web Development Program</h3> 
                <h4>hosted by </h4>
                <h3 className="bold-text">Georgia Institute of Technology.</h3>
                <h2>My Skills are</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>React.js</li>
                        <li>MongoDb</li>
                        <li>API</li>
                        <li>OOP</li>
                        <li>MVC</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>NoSQL</li>
                    </ul>
        </section>
        <Footer/>  
        </Container>
    )
}

export default Information;