import React from 'react'
import './Services.css'
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { FaShopify } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";


function Services(props) {
  const { services } = props;
  return (
    <div className='services-section'>
      <Container> 
        <Row>
            <Col>
             <h2 className='services-heading heading text-center'>Our Services</h2>
            </Col>
        </Row>
        <Row>    
          {services.map((service, index)=> (
            <Col key={index} lg={4} md={4} sm={12} className='service-item'>
              <div className='service-item-content'>
                  <span className='service-item-icon'>
                    {service.icon === 'shopify' ? <FaShopify size={70}/>  
                    : service.icon === 'digital' ? <BsMegaphone size={70} />
                    : service.icon === 'code' ? <FaLaptopCode size={70} /> : '' }
                  </span>
                  <h3 className='service-item-heading'>{service.heading}</h3>
                  <p className='service-item-text'>
                  {service.content}
                  </p>
               </div>
            </Col> 
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Services
