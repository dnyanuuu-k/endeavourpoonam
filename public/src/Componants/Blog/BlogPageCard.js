import React from 'react'
import { Link } from 'react-router-dom';
import './Blog.css'

function BlogPageCard({ title,name, content, date,img }) {
  return (
    <div>
      {/* <Link to={linkpage}> */}
        <div className="blog-card p-4">
           <img src={img} className="w-100 " alt="" /> 
          <div className='border-bottom py-2 '>
          <span className='card-blog-title'>{title}</span>
          <br />
           <span className='text-gray-blog'>  by <span> {name}</span>  | {date}</span>
          </div>
          <p className='mt-3 blog-content'>{content} </p>
        </div>
      {/* </Link> */}
      
    </div>
  )
}

export default BlogPageCard