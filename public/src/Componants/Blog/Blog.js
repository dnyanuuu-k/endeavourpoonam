import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogCardData from './BlogCardData';
import BlogPageCard from './BlogPageCard';
import './Blog.css'

function Blog() {
    // Filter the data based on the specified range of IDs (6 to 20)
    const filteredData1 = BlogCardData.filter(entry => entry.id >= 1 && entry.id <= 6);

    if (filteredData1.length === 0) {
      // Handle the case when no entries are found in the specified range
      return <div>Error: No entries found</div>;
    }
  return (
    <div>
      <Container>
        <Row>
          <Col lg={8} md={12} sm={12} className='p-3'>
            <Row className='justify-content-center'>
            {filteredData1.map(entry => (
            <Col lg={6} md={6} sm={12} className="my-4" key={entry.id}>
              <Link to={entry.link} className='text-decoration-none'>
                <BlogPageCard
                  img={entry.img}
                  name={entry.name}
                  title={entry.title}
                  content={entry.content}
                  date={entry.date}
                />
              </Link>
            </Col>
          ))}
            <Link className='d-flex justify-content-center text-decoration-none my-3' to='/blog1'><button type="button" class="btn btn-dark">More</button></Link>

            <Link className='d-flex justify-content-center text-decoration-none my-3' to='/blog2'><button type="button" class="btn btn-dark">More</button></Link>
            </Row>
          </Col>
          <Col lg={4} md={12} sm={12} className='p-5'>
            <div className="blog-cataguries mb-5">
              <h6 className='border-bottom py-2'>
              Blog Categories
              </h6>
              <Link className='text-decoration-none'> <p>* Photography</p> </Link>
              <Link className='text-decoration-none'> <p>* Web Design</p> </Link>
              <Link className='text-decoration-none'> <p>* Illustration</p> </Link>
              <Link className='text-decoration-none'> <p>* Marketing</p> </Link>
            </div>

            <div className="blog-popular-post mb-5">
              <h6 className='border-bottom py-2'>
              Popular Posts
              </h6>
                <Row>
                  <Col lg={6} md={6} sm={12} className='my-2'>
                    <div>
                      <img src="https://cdn.pixabay.com/photo/2024/02/26/10/58/rose-8597693_1280.jpg" alt="" className="popular-post w-100" />
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12} className='my-2'>
                    <div className="popular-post-content ">
                      <Link className='text-decoration-none'>
                      <span>Lorem ipsum dolor sit amet </span>
                      </Link>
                      <div className="popular-post-date">25 Feb</div>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12} className='my-2'>
                    <div>
                      <img src="https://cdn.pixabay.com/photo/2024/02/26/10/58/rose-8597693_1280.jpg" alt="" className="popular-post w-100" />
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12} className='my-2'>
                    <div className="popular-post-content ">
                      <Link className='text-decoration-none'>
                      <span>Lorem ipsum dolor sit amet </span>
                      </Link>
                      <div className="popular-post-date">25 Feb</div>
                    </div>
                  </Col>
                </Row>
            </div>

            <div className="blog-text mb-5">
              <h6 className='border-bottom py-2'>
              Text
              </h6>
              <p>
              Marketing and Designs are two sides of the same coin. Both are indespensable. Without a proper marketing Strategy and consumer analytics your businesses is incomplete. Likewise marketing campaigns without structured designs are likely to get into mess.
              </p>
            </div>

            <div className="blog-recent-post mb-5">
              <h6 className='border-bottom py-2'>
              Text
              </h6>
              <div>
              <span>Maria on :- <Link>Inbound Marketing</Link></span> <br />
              <span>John on :- <Link>Together</Link></span> <br />
              <span>Andy on :- <Link>Graphics</Link></span> <br />
              <span>Mark on :- <Link>How to Capture perfect stills</Link></span> <br />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* <li><Link to="/blog/page1">Blog Page 1</Link></li>
        <li><Link to="/blog/page2">Blog Page 2</Link></li> */}
    </div>
  );
}

export default Blog;
