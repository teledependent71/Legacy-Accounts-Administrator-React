import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Legacy Accounts Administrator</title>
        <meta property="og:title" content="Legacy Accounts Administrator" />
      </Helmet>
    </div>
  )
}

export default Home
