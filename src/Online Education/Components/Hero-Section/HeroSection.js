import React from 'react'
import './hero-section.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../../Assets/hero-img1.png'
function HeroSection() {
  return (
    <div>
        <Container id='home'>
        
            <Row>
                <Col lg='6' md="6">
                  <div className="hero__content">
                  <h2 className='mb-4'>AnyTime AnyWhere ...<br />LevelUp Your <br /> Skills</h2>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br /> Veniam ipsa voluptatum minus aliquam natus qui iste dolores odit quos tenetur !</p>
                     <div className="search">
                        <input type="text" placeholder='search' />
                        <button className='btn btn-success me-3'>Search</button>
                     </div>
                  </div>
                </Col>
                <Col lg="6" md="6">
                   <img src={heroImg} alt=""className='w-100' />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HeroSection