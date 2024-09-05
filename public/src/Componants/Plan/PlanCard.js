import React from 'react'
import Button from 'react-bootstrap/Button';

function PlanCard({ frontData, backData }) {

  return (
    <div className="flip3D">
      <div className="back d-flex align-items-center justify-content-center">
        <section className="backContent ">
          <div className='text-center'>
          <h4 className='text-center my-5'>  {backData.price} /-</h4> 
          <Button variant="light ">BOOK NOW</Button>{' '}
          
          </div>
        </section>
      </div>
      <div className="front p-4">
        {/* <img className="clint circle" src={frontData.image} alt={frontData.name} /> */}
        <section className="about">
          <h4>{frontData.name}</h4>
          {/* <p>{frontData.role}</p> */}

          {frontData.serviceList && (
            <ul className="price-details text-center">
              {frontData.serviceList.map((service, index) => (
                <li className='p-2' key={index} dangerouslySetInnerHTML={{ __html: service }} />
              ))}
            </ul>
          )}
        </section>
        
      </div>
    </div>
  );
  
};




export default PlanCard