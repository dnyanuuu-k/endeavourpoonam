import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { projectsData } from './ProjectCardData';
import ProjectCard from './ProjectCard';
import Imgslider from './slider-bg1.jpg'
import { Parallax } from 'react-parallax';
import './Project.css'


function Project() {
  const [selectedCategory, setSelectedCategory] = useState('Everything');

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === 'Everything'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  const categories = ['Everything', 'Branding', 'Websites', 'Graphic Design', 'Video', 'All'];

  return (
  <div>
      <Parallax  bgImage={Imgslider} bgImageAlt="the cat" bgImageSize="cover" strength={300}>
      <section >
            <div className="project-hero d-flex justify-content-center align-items-center">
            <div>
            <h1 className="animated fadeInUp text-center">Just Some Of Our Latest Projects.</h1>
              <p className="animated fadeInUp text-center mt-4">Don’t just take our word for it. Check out some of our latest work.</p>
            </div>
            </div>
    </section>
    </Parallax> 
     {/* filter section start  */}
    <div>
      <div className='d-flex justify-content-center my-4 catag'>
        {categories.map((category) => (
          <button
            className='category-button m-5 px-3 btn btn-dark'
            key={category}
            onClick={() => handleFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <Container>
        <Row className='justify-content-center'>
          {filteredProjects.map((project) => (
            <Col key={project.id} lg={2} className='p-4 project-sec'>
              <ProjectCard img={project.img} category={project.category} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
     {/* filter section end  */}
  </div>
  );
}

export default Project;
