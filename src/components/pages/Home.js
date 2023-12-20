import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css'

function Home() {
    return (
        <section>
            <Container fluid className='home-page' id='home'>
                <Container className='h-content'>
                    <Row>
                        <Col md={7} className='home-header'>
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hi! I am a Front-End React Developer!
                            </h1>
                        </Col>
                    </Row>

                </Container>

            </Container>
        </section>
    )
}

export default Home;