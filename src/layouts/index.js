import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './normalize.css'

import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'

const TemplateWrapper = ({ children, location, solidHeader = true }) => {
  return (
    <div>
      <Helmet
        title="Bitcoin Cash - Peer-to-Peer Electronic Cash"
        meta={[
          { 
            name: 'description', 
            content: 'Bitcoin Cash brings sound money to the world. Merchants and users are empowered with low fees and reliable confirmations. The future shines brightly with unrestricted growth, global adoption, permissionless innovation, and decentralized development.',
          },
          {
            name: 'og:title',
            content: 'Bitcoin Cash - Peer-to-Peer Electronic Cash',
          },
          { 
            name: 'og:description', 
            content: 'Bitcoin Cash brings sound money to the world. Merchants and users are empowered with low fees and reliable confirmations. The future shines brightly with unrestricted growth, global adoption, permissionless innovation, and decentralized development.',
          },
          {
            name: 'og:image',
            content: '/static/images/bitcoin-cash-logotype.png',
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
          },
        ]}
      />
      <Header 
        solid={solidHeader}
      />

      {children()}

      <Footer />

    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
