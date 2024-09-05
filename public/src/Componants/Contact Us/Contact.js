import React from 'react';
import './Contact.css';
import { Parallax } from 'react-parallax';
import Imgslider from './slider-bg1.jpg'


function Contact() {
  return (
     <div>
      <Parallax  bgImage={Imgslider} bgImageAlt="the cat" bgImageSize="cover" strength={300}>
      <section >
            <div className="project-hero d-flex justify-content-center align-items-center">
            <div>
            <h1 className="animated fadeInUp text-center">Drop Us a Mail</h1>
              <p className="animated fadeInUp text-center mt-4">We shall see that we get to you at the earliest.</p>
            </div>
            </div>
    </section>
    </Parallax>
    <div className="container">
      <div className="innerwrap">

        <section className="section1 clearfix">
          <div className="textcenter">
            
            
            {/* <h1>Drop Us a Mail</h1> */}
          </div>
        </section>

        <section className="section2 clearfix">
          <div className="col2 column1 first">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3781.3709120368576!2d73.77521617519368!3d18.602379482507082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM2JzA4LjYiTiA3M8KwNDYnNDAuMSJF!5e0!3m2!1sen!2sin!4v1709295657238!5m2!1sen!2sin"
              width="100%"
              height="650px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col2 column2 last">
            <div className="sec2innercont">
              <div className="">
                <p className="my-1">A602, 6th Floor, Above Bank of Baroda, Pride Square, Kalewadi Phata, Wakad Pune- 411057</p>
                <p className="my-2"><span>Phone :</span> +91 976885083</p>
                <p className="my-2"><span>Email :</span> vivek.mengu016@gmail.com</p>
              </div>
            </div>
            <div className="sec2contactform">
              <h3 className="sec2frmtitle">Want to Know More?? Drop Us a Mail</h3>
              <form action="">
                <div className="clearfix">
                  <input className="col2 first" type="text" placeholder="FirstName" />
                  <input className="col2 last" type="text" placeholder="LastName" />
                </div>
                <div className="clearfix">
                  <input className="col2 first" type="Email" placeholder="Email" />
                  <input className="col2 last" type="text" placeholder="Contact Number" />
                </div>
                <div className="clearfix">
                  <textarea name="textarea" id="" cols="30" rows="7">Your message here...</textarea>
                </div>
                <div className="clearfix"><input type="submit" value="Send" /></div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  );
}

export default Contact;
