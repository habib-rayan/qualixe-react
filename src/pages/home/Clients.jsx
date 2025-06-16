import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Clients.css'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

function Clients(props) {
    const {clients} = props;
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]
      };
    return (
        <div className='clients-section'>
            <Container>
                <Row>
                    <Col>
                        <h2 className='cliens-heading heading text-center'>Our Valuable Clients</h2>
                    </Col>
                </Row>
                <Row>
                    <Slider {...settings}>
                        {clients.map((client, index) => (
                            <Col key={index} className='client-item'>
                                <Link to={client.url} target='_blank'>
                                    <Image src={client.image} className='client-img'></Image>
                                </Link>
                            </Col>
                        ))}
                    </Slider>
                </Row>
            </Container>
        </div>
    )
}

export default Clients
