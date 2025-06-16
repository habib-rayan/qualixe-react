import React from 'react'
import Hero from './home/Hero'
import About from './home/About'
import Clients from './home/Clients'
import Portfolio from './home/Portfolio'
import ClientData from '../ClientsData.json'
import Portfolios from '../PortfolioData.json'
import ServiceData from '../services.json'
import Services from './home/Services'

function Home() {
  
  return (
    <>
      <Hero />
      <About />
      <Services services={ServiceData}/>
      <Portfolio portfolios={Portfolios} limit='6'/>
      <Clients clients={ClientData} />
    </>
   
  )
}

export default Home
