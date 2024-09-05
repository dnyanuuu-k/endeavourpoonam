import React from 'react'
import './Home.css';
import { Parallax } from 'react-parallax';
import  ParaImg1 from '../../images/slider-bg.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gif from './wrapper-img.gif'
import ParaImg2 from './featue-bg.jpg'
import Card from './Card'
import ParaImg3 from './img3.jpg'
import Testimonials from './Testimonial'

function Home() {
  return (
 <div className="home">
      <Parallax  bgImage={ParaImg1} bgImageAlt="the cat" bgImageSize="cover" strength={300}>
      <section >
            <div className="block d-flex justify-content-center align-items-center">
            <div>
            <h1 className="animated fadeInUp">A PREMIER MARKETING &#38; <br /> DESIGN AGENCY IN PUNE</h1>
              <p className="animated fadeInUp">We love marketing and the work we do.We work closely with our <br />clients to deliver the best possible solutions for their needs</p>
            </div>
            </div>
    </section>
    </Parallax>
    <Container>
      <Row >
        <Col lg={7} md={7} sm={12} className="p-5 my-5" >
           <div className="about-us-title ">
             <h2>About Us</h2>
           </div>
           <div className='about-us-para'>
           <p>With more than 5 years in Advertising, <a href="https://www.linkedin.com/company/13345995" className='text-decoration-none'>Marketing</a>, <a href="https://twitter.com/SharadKoche" className='text-decoration-none'>Events and Sales Promotion</a> we are the leader of this industry in term of creativity, results and ROI. Our wide range of experience from a plethora of industries only helps us become more versatile. From Real Estate to Hospitality to Pharma to Healthcare to Softwares to FMCG we have worked with some of the very best clients. Without competing with other ad agencies in Pune, we have carved out our own share of being the best advertising companyin Pune. We feel marketing is very subjective, a strategy that is doing good for one client does not necessarily do good for the other even if the client belongs to same industry and domain. <a href="https://www.facebook.com/Endeavour-Marketing-LLP-289043068227434/" className='text-decoration-none'>Marketing</a> agencies use the same yardstick to strategize every business. Endeavour Marketing Has a strategy that is bespoke and tailored to your business needs.</p>
              <p><a href="https://plus.google.com/u/1/105805738901311056451" className='text-decoration-none'> We are social and present at every marketing community  with plus</a></p>
              <br />
              <p><a href="" className='text-decoration-none'>Our photos are liked across wide segments</a> </p>
              <br />
              <a href="projects" className="btn btn-view-works text-decoration-none" >View Works</a>
           </div>
        </Col>
      
        <Col lg={5} md={5} sm={12} className="p-5 about-us-img my-5">
      
           <img src={Gif} alt=""  />
           {/* <img src="" alt="" srcset="" /> */}
        </Col>
      </Row>
    </Container>


    <Parallax  bgImage={ParaImg2} bgImageAlt="the cat" bgImageSize="cover" strength={300}>
      <section >
             <Container>
              <Row className='p-5'>
                <Col lg={6} md={6} sm={12}>
                
                </Col>
                <Col lg={6} md={6} sm={12} className="idea-section my-5">
                <h2>WE BELIEVE IN GREAT IDEAS</h2>
                
          <p>We are the only marketing company in Pune that believes in discussing and planning more than impulsive campaigning.</p>
          <p>Unlike other Ad agencies our motto is to</p> 
          <h5 className='mt-4'>" To Make you grow "</h5>.
          <p> We are the only digital marketing company in Pune that believes in target marketing backed by research. Without substantial research numbers at hand, no marketing agency can make the advertising and marketing campaign.</p>
          <p>Our Social Media Campaigns are known to bring impressive ROIs and are worth every penny you spend</p>
          <a href="projects" className="btn btn-view-works my-3">View Works</a>
                </Col>
                
              </Row>
             </Container>
    </section>
    </Parallax>

    <Card></Card>

    <Parallax  bgImage={ParaImg3} bgImageAlt="the cat" bgImageSize="cover" strength={300}>
    <section >
          <div className=" block1 d-flex justify-content-center align-items-center">
            <div className='text-center my-5'>
              <h2 className='mt-5'>We design delightful digital experiences.</h2>
                <p className='p-5 '>
                  Read more about what we do and our philosophy of design. Judge for yourself The work and results we’ve achieved for other clients, and meet our highly experienced Team who just love to design.
                </p>
            </div>
          </div>
    </section>
    </Parallax>
  <Testimonials></Testimonials>


 </div>

  )
}

export default Home;
