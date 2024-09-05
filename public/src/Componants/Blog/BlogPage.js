// BlogPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const BlogPage = ({ data }) => {
  const { pageId } = useParams();

  return (
    <div>
      <Container>
        <Row className='my-5'>
          <Col lg={8} md={8} sm={12}>
            <div className='text-center border-bottom py-2 mb-5' >
            <h3 >{data.title}</h3>
             <span className='text-center'> 02 Mar 2018 Sharad Koche </span>
            </div>
             <div dangerouslySetInnerHTML={{ __html: data.para1 }} className='my-2'/>
             <img src={data.img} alt="" className='my-2 w-100' />
             <div dangerouslySetInnerHTML={{ __html: data.para2 }} className='my-2' />
            
          </Col>
          <Col lg={4} md={4} sm={12}>
            <div className='catageries-of-singleblog'>
            <h3 className='mb-3'>Categories</h3>
            <Link className='text-decoration-none'><p>Digital Marketing</p></Link> 
            <Link className='text-decoration-none'><p>Conventional Marketing</p></Link>   
            <Link className='text-decoration-none'><p>Market Research</p></Link>   
            <Link className='text-decoration-none'><p>Marketing Hacks</p></Link>   
            <Link className='text-decoration-none'><p>Web Design</p></Link>
            <Link className='text-decoration-none'><p>Photography</p></Link>  
            <Link className='text-decoration-none'><p>Graphics and Design</p></Link> 
            <Link className='text-decoration-none'><p>Social Media</p></Link>          
            </div>  

            <div className='recentPost-of-singleblog my-5'>
            <h3 className='mb-3'>Recent Posts</h3>
               <div>
                <Link className='text-decoration-none'><img src={data.img1} className='w-100' alt="" />
                <p>{data.recent1}</p>
                </Link>
                </div>
                <div className='my-3'>
                <Link className='text-decoration-none'><img src={data.img2} className='w-100' alt="" />
                <p>{data.recent2}</p>
                </Link>
                </div>    
            </div>         
          </Col>
        </Row>
        <div className='d-flex justify-content-between mb-5'> 
        <Link to={data.privious}>
        <Button variant="info">Previous</Button>
      </Link>
      <Link to={data.next}>
        <Button variant="info">Next</Button>
      </Link>
        </div>
      </Container>
    </div>
  );
};

export default BlogPage;
