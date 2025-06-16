import React from 'react'
import PageBanner from '../../components/PageBanner'
import ServicesSection from '../home/Services'
import ServiceData from '../../services.json'

function Services() {
  return (
    <div className='page-services'>
      <PageBanner heading='Services' />
      <ServicesSection services={ServiceData} />
    </div>
  )
}

export default Services
