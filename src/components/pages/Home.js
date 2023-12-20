import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css'
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Image from 'react-bootstrap/Image';
import Footer from '../Footer';

function Home() {
    return (
        <section className='body'>
            <Container fluid className='home-page' id='home'>
                <Container className='h-content container'>
                    <Row>
                        <Col md={8} className='home-header'>
                            <h1 style={{ paddingBottom: 15 }} className="heading" data-text="Hi! I am a Front-End React Developer!">
                                <span className="letter">H</span>
                                <span className="letter">i</span>
                                <span className="letter">!</span>
                                <span className="letter"> </span>
                                <span className="letter">I</span>
                                <span className="letter"> </span>
                                <span className="letter">a</span>
                                <span className="letter">m</span>
                                <span className="letter">.</span>
                                <span className="letter">.</span>
                                <span className="letter">.</span>
                            </h1>
                            <h1 style={{ paddingBottom: 15 }} className='heading2' data-text="dev">
                                A Growing React Developer
                            </h1>
                        </Col>
                    </Row>
                    </Container>
                <Container className='project-cont container'>
                    <Row className='project'>
                        <Col md={8} className="project-render">
                            <div>

                            <h2 style={{ paddingBottom: 15}} className="project-header">
                                <WorkIcon></WorkIcon> Projects
                            </h2>
                        <div className='project-samples' id="projects">
                            <h3 style={{ paddingBottom: 15}} className="project-info">
                                    FLIPR
                            </h3>
                            <p className='p-desc'>FLIPR is a web application created using sequelize and express js. It is a demonstration of an e-commerce website for clothing brands. We use express-sessions to authenticate each users to store data and handlebars to display different web application pages.</p>
                                </div>
                        </div>
                        </Col>
                        <Col xs={6} className='container'>
                            <div className='img-div'>
                            <a href="https://github.com/slchld1/FLIPR" target='_blank'>
                            <Image className='flipr-img' src="flipr-sample950.png" rounded />
                            </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className='project-cont2'>
                        <Col xs={6} className='container-rev'>
                            <div className='img-div'>
                            <a href="https://github.com/oliviasylee/firefly-cafe/tree/main?tab=readme-ov-file" target='_blank'>
                            <Image className='flipr-img' src="homepage.jpg" rounded />
                            </a>
                            </div>
                        </Col>
                    <Row className='project2'>
                        <Col md={8} className="project-render">
                            <div>

                            <h2 style={{ paddingBottom: 15}} className="project-header2">
                                Projects <WorkIcon></WorkIcon>
                            </h2>
                        <div className='project-samples2' id="projects">
                            <h3 style={{ paddingBottom: 15}} className="project-info2">
                                    Firefly Cafe
                            </h3>
                            <p className='p-desc2'>Firefly Cafe is a Full Stack e-commerce website for a fictional cafe. This application was built for cafe's that want to reach out to their locals with a delivery service.</p>
                                </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
                <Container className='contact-container'>
                    <Row className='contact'>
                        <Col className='contact-heading'>
                            <h1>
                                <ContactsIcon/> Contact
                            </h1>
                        </Col>
                        <Col className='linked-in'>
                            <LinkedInIcon/> <a href='https://www.linkedin.com/in/minjae-c-065167128/' target='_blank'>https://www.linkedin.com/in/minjae-c-065167128/</a>
                        </Col>
                        <Col className='email'>
                            <EmailIcon/> <a href='mailto:jaecho203@gmail.com'>jaecho203@gmail.com</a>
                        </Col>
                    </Row>
                </Container>
            <Footer/>
            </Container>
        </section>
    )
}

export default Home;