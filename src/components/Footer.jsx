import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuMails } from "react-icons/lu";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className='footer-section'>
            <Container>
                <Row>
                    <Col lg={3} md={3} sm={12}> 
                        <Image src={"./assets/img/logo.png"} alt='img' className='footer__logo' />
                        <p className='footer-text'>
                            We are best e-commerce solution company in bangladesh on shopify CMS platform. We have amazing and experience team members. so let's contact with us.
                        </p>
                    </Col> 
                    <Col lg={3} md={3} sm={12} className='ps-lg-5'> 
                        <h3 className='footer-heading'>Quick links</h3>
                        <ul className='footer-nav'>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><Link to={'/services'}>Services</Link></li>
                            <li><Link to={'/portfolio'}>Portfolio</Link></li>
                        </ul>
                    </Col> 
                    <Col lg={3} md={3} sm={12}> 
                        <h3 className='footer-heading'>Contact Us</h3>
                        <ul className='footer-contact'>
                            <li><Link to={'mailto:qualixe.info@gmail.com'}><LuMails size={24} /> <span>qualixe.info@gmail.com</span></Link></li>
                            <li><Link to={'/tell:+8801521481618'}><FaHeadphonesSimple size={24} /> <span>+8801521 481 618</span></Link></li>
                            <li><Link ><FaMapMarkerAlt size={24} /> <span>House-06, Road-3, Mirpur-11, Dhaka, BD</span> </Link></li>
                        </ul>
                    </Col> 
                    <Col lg={3} md={3} sm={12}> 
                        <h3 className='footer-heading'>Follow Us</h3>
                        <ul className='footer-social'>
                            <li><Link to={'https://www.facebook.com/qualixe'} target='_blank'><FaFacebookSquare size={35} /></Link></li>
                            <li><Link to={'https://www.linkedin.com/company/qualixe'} target='_blank'><FaLinkedin size={35}/></Link></li>
                        </ul>
                    </Col> 
                </Row>
            </Container>
            <div className='footer-copyright'>
                <Row>
                    <Col className='text-center'>
                        <p className='copy-right'> 
                        ©{ new Date().getFullYear()} All Rights Reserved. With Design by <Link to={'/'} target='_blank'>Habib Rayan</Link>
                        </p>
                    </Col>
                </Row>
            </div>
      </div>
    </>
  )
}

export default Footer
