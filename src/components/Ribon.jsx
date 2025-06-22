import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Ribon.css'
import { TfiHeadphoneAlt } from "react-icons/tfi";

function Ribon() {
  return (
    <div className='ribon-section'>
      <Container>
        <Row>
            <Col lg={7} sm={12} className='my-auto'>
                <h3 className='ribon-heading'>Let's contact with us</h3>
            </Col>
            <Col lg={5} sm={12} className='text-end'>
                <Link to={'tel:+8801521481618'} className='button ribon-btn'>
                    <span className='ribon-icon'><TfiHeadphoneAlt size={60} /></span>
                   <span> +8801521 481 618</span>
                </Link>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Ribon
