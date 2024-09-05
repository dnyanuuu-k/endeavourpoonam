import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProjectCard({ img, category }) {
  return(
   
        <div className=''>
          <img src={img} className='w-100' alt="" />
          <p>Category: {category}</p>
        </div>
       
  )
}

export default ProjectCard
