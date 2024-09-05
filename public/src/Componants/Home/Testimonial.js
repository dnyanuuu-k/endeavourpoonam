import React from 'react'
import './Testimonials.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CountUp from 'react-countup';
import { TiMessages } from "react-icons/ti";
import { GiSpectacleLenses } from "react-icons/gi";
import { PiNotePencil } from "react-icons/pi";
import { FaClockRotateLeft } from "react-icons/fa6";


function Testimonial() {
  return (
    <div>
      <Container>
        <Row>
          <div className='testimonial-intro mt-5 text-center'>
          <h2 className='my-3' >Fun Facts About Us</h2>
          <p>" Probably we are the only marketing company in Pune that works exclusively with clients</p>
          </div>
        </Row>
      </Container>
      <Container className='container12'>
        <Row className='m-0 p-0'>
           <Col lg={6} md={6} sm={12}>
            <Row>
            <Col lg={6} md={6} sm={12} className="my-5">
           <div>
             <div className='timmer-icon-font text-center'>
             <TiMessages />
             </div>
             <div className='text-center timmer-conter'>
             <CountUp delay={2} end={100}  duration={1000} />
             </div>
             <div>
                <p className='text-center'>Messages Received</p>
             </div>
            
           </div>
           </Col> 
           <Col lg={6} md={6} sm={12} className="my-5">
           <div>
             <div className='timmer-icon-font text-center'>
             <GiSpectacleLenses />
             </div>
             <div className='text-center timmer-conter'>
             <CountUp delay={2} end={3500}  duration={1000}/>
             </div>
             <div>
                <p className='text-center'>Research Articles Studied</p>
             </div>
             
           </div>
            </Col> 
           <Col lg={6} md={6} sm={12} className="my-5">
           <div>
             <div className='timmer-icon-font text-center'>
             <PiNotePencil />
             </div>
             <div className='text-center timmer-conter'>
             <CountUp delay={2} end={200}  duration={1000} className='text-center'/>
             </div>
             <div>
                <p className='text-center'>Blogs and Article Published</p>
             </div>
           </div>
            </Col> 
           <Col lg={6} md={6} sm={12} className="my-5">
           <div>
             <div className='timmer-icon-font text-center'>
             <FaClockRotateLeft />
             </div>
             <div className='text-center timmer-conter mt-2'>
             <CountUp delay={2} end={100}  duration={1000} className='text-center'/>
             </div>
             <div>
                <p className='text-center'>Messages Received</p>
             </div>
           </div>
            </Col> 
            </Row>
           </Col>
           <Col lg={5} md={5} sm={12} className="p-0 m-0">
           <div className="container mt-5">
	<div className="row justify-content-center">
		<div className="  m-auto">
			<div id="myCarousel" className="carousel slide" data-ride="carousel">
			
				<div className="carousel-inner">
				<div className="item carousel-item active">
						
						<p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus </p>
					
            <div className="img-box mb-3">
              <img src="https://i.ibb.co/Trv7hDv/img3.jpg" alt=""/>
            </div>

            <p className="overview"><b>Hellen Wright</b>, Athelete</p>
					</div>
					<div className="item carousel-item">
						
						<p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus </p>
					
            <div className="img-box mb-3">
              <img src="https://i.ibb.co/Trv7hDv/img3.jpg" alt=""/>
            </div>

            <p className="overview"><b>Hellen Wright</b>, Athelete</p>
					</div>
					<div className="item carousel-item">
						
						<p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus </p>
					
            <div className="img-box mb-3">
              <img src="https://i.ibb.co/Trv7hDv/img3.jpg" alt=""/>
            </div>

            <p className="overview"><b>Hellen Wright</b>, Athelete</p>
					</div>
          
				</div>
			
				<a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
					<i className="fa fa-angle-left"></i>
				</a>
				<a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
					<i className="fa fa-angle-right"></i>
				</a>
			</div>
		</div>
	</div>
</div>
           </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Testimonial
