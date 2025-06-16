import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PageAbout.css'
import Image from 'react-bootstrap/Image'
import PageBanner from '../../components/PageBanner';
import AboutSection from '../home/About'
import Clients from '../home/Clients'
import ClientData from '../../ClientsData.json'

function About() {
  return (
    <div className='about-page'>
        <PageBanner heading='About Us' />
        <AboutSection />
        <Clients clients={ClientData} />
    </div>
  )
}

export default About
