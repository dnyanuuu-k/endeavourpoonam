import React from 'react';
import CardList from './CardList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAlarmClock } from '@fortawesome/free-solid-svg-icons';
import './Card.css'


function Card() {
  return (
    <div>
      <Container>
      <Row className=''>
          <div className="card-heading text-center">
            <h2 className='my-2'>Our Services</h2>
            <p>We have our sackfull of services that can be catered to your business needs</p>
          </div>
      </Row>   
       <Row className=' text-center'>
          {CardList.map((card) => (
            <Col key={card.id} xs={12} sm={6} md={4} lg={3} >
              <div className="card card-degign p-4">
                {/* <img src={card.icon} alt={`Card ${card.id} Icon`} /> */}
                <div className='text-center card-icon my-2'>
                {card.icon} 
                </div>
                <div className='card-desciption'>
                  <h4 className='mt-3'>{card.title}</h4>
                  <p className='my-2'>{card.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Card;
