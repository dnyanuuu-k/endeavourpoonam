import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer1() {
  return (
    <div>
      <footer>
        <Container className="p-5">
          <Row>
            <Col md={12}>
              <div className="footer-manu">
                <div className="socials d-flex justify-content-center">
                  {/* Uncomment and modify as needed */}
                  {/* <a href="https://twitter.com/endeavmar" className="fa fa-twitter mx-3"></a> */}
                  <a href="https://www.facebook.com/endeavmark" className="fa fa-facebook mx-3"></a>
                  <a href="https://www.instagram.com/endeavmark" className="fa fa-instagram mx-3"></a>
                  {/* <a href="https://plus.google.com/u/1/105805738901311056451" className="fa fa-google-plus mx-3"></a> */}
                  {/* <a href="https://in.pinterest.com/sbkoche/" className="fa fa-pinterest mx-3"></a> */}
                  <a href="https://www.linkedin.com/company/endeavour-marketing-llp/" className="fa fa-linkedin mx-3"></a>
                </div>

                <br />

                <ul className='list-unstyled d-flex justify-content-center footer-nav'>
                  <li className='mx-4 my-2'><a href="index text-decoration-none " >About Us</a></li>
                  <li className='mx-4 my-2'><a href="projects text-decoration-none " >Projects</a></li>
                  <li className='mx-4 my-2'><a href="plans text-decoration-none " >Plans</a></li>
                  <li className='mx-4 my-2'><a href="blog text-decoration-none " >Blog</a></li>
                  <li className='mx-4 my-2'><a href="contact text-decoration-none" >Contact</a></li>
                </ul>

                <br />

                <p className='text-center'>Copyright 2017-2020 &copy; Crafted by Endeavour Marketing.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer1;
