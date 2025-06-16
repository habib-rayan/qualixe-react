import React from 'react'
import PageBanner from '../../components/PageBanner'
import Portfolios from '../../PortfolioData.json'
import Portfolio from '../home/Portfolio'
import './PagePortfolio.css'

function PagePortfolio() {
  return (
    <div className='page-portfolio'>
      <PageBanner heading='Portfolio' />
      <Portfolio portfolios={Portfolios} limit='18'/>
    </div>
  )
}

export default PagePortfolio
