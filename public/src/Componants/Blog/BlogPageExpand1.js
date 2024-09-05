import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BlogCardData from './BlogCardData'; // Adjust the path based on your actual file structure
import BlogPageCard from './BlogPageCard'; // Adjust the path based on your actual file structure
import './Blog.css';

const BlogPageExpand1 = () => {
  // Filter the data based on the specified range of IDs (6 to 20)
  const filteredData = BlogCardData.filter(entry => entry.id >= 6 && entry.id <= 850);

  if (filteredData.length === 0) {
    // Handle the case when no entries are found in the specified range
    return <div>Error: No entries found</div>;
  }

  return (
    <div>
      <Container>
        <Row>
          {filteredData.map(entry => (
            <Col lg={3} md={4} sm={12} className="my-4" key={entry.id}>
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
        </Row>
      </Container>
    </div>
  );
};

export default BlogPageExpand1;
