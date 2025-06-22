import React from 'react'
import PageBanner from '../../components/PageBanner'
import './PageContact.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";


function Contact() {
  return (
    <div className='page-contact'>
       <PageBanner heading='Contact' />

       <div className='contact-section'>
          <Container>
              <Row>
                  <Col lg={4} md={4} sm={12} className='text-center'>
                      <div className='contact-content'>
                          <span className='contact-icon'><FaPhone size={28} /></span>
                          <h3 className='contact-heading'>Phone Number</h3>
                          <Link to={'tel:+88015-481618'} className='contact-link'>+8801521 481 618</Link>
                      </div>
                  </Col>
                  <Col lg={4} md={4} sm={12} className='text-center'>
                      <div className='contact-content'>
                          <span className='contact-icon'><IoIosMail size={28} /></span>
                          <h3 className='contact-heading'>Email Address</h3>
                          <Link to={'mailto:qualixe.info@gmail.com'} className='contact-link'>qualixe.info@gmail.com</Link>
                      </div>
                  </Col>
                  <Col lg={4} md={4} sm={12} className='text-center'>
                      <div className='contact-content'>
                          <span className='contact-icon'><FaMapMarkerAlt size={28} /></span>
                          <h3 className='contact-heading'>Office Location</h3>
                          <Link className='contact-link'>House-06, Road-3, Mirpur-11, Dhaka, BD</Link>
                      </div>
                  </Col>
              </Row>
          </Container>
       </div>
    </div>
  )
}

export default Contact
