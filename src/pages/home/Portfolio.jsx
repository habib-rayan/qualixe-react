import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Portfolio.css'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";

function Portfolio(props) {
    const {portfolios, limit} = props;
    const randomView = arr => [...arr].sort(() => Math.random() - 0.5);

    return (
        <div className='portfolio-section'>
            <Container>
                <Row>
                    <Col>
                        <h2 className='portfolio-heading heading text-center'>Latest Creative Work</h2>
                    </Col> 
                </Row>
                
                <Row>    
                    {randomView(portfolios.map((item, index) => index < limit &&  (
                        <Col key={index} lg={4} md={4} sm={12} className='portfolio-item pb-4'>
                            <Link to={item.url} target='_blank' className='portfolio-item-link'>
                                <Image src={item.image} className='portfolio-img'></Image>
                                <Link to={item.url} target='_blank' className='portfolio-btn'>
                                    <FaEye />
                                    <span>View Live </span>
                                </Link> 
                                <span className='portfolio-item-overly'></span>
                            </Link>
                        </Col>
                    )))}
                    <Col className='text-center portfolio-button mt-5'>
                        <Link to={'/portfolio'} className='button portfolios-btn'>View All</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio
