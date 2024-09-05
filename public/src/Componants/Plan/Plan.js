import React from 'react'
import './Plan.css'
import PlanCard from './PlanCard'
import { cardData1, cardData2 , cardData3 , cardData4 }  from './CardData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Parallax } from 'react-parallax';
import Imgslider from './slider-bg1.jpg'
import Button from 'react-bootstrap/Button';

function Plan() {
  return (
    <div>
      <Parallax  bgImage={Imgslider} bgImageAlt="the cat" bgImageSize="cover" strength={300}>
      <section >
            <div className="project-hero d-flex justify-content-center align-items-center">
            <div>
            <h1 className="animated fadeInUp text-center">Checkout Our NEW Pricing Plans</h1>
              <p className="animated fadeInUp text-center mt-4">Most Exciting Offers At The Most Affordable Rates.</p>
            </div>
            </div>
    </section>
    </Parallax> 
        <div>
          <Container className='my-5 plan-container'>
            <Row className='justify-content-center'>
              <Col lg={3} md={6} sm={12}>
              <PlanCard  frontData={cardData1.front} backData={cardData1.back} />
              </Col>
              <Col lg={3} md={6} sm={12}>
              <PlanCard frontData={cardData2.front} backData={cardData2.back} />
              </Col>
              <Col lg={3} md={6} sm={12}>
              <PlanCard frontData={cardData3.front} backData={cardData3.back} />
              </Col>
              <Col lg={3} md={6} sm={12}>
              <PlanCard frontData={cardData4.front} backData={cardData4.back} />
              </Col>
            </Row>
          </Container>
        </div>
    </div>
  )
}

export default Plan