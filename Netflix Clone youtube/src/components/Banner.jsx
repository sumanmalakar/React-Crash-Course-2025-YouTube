import React from 'react'

import './Banner.css'

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-animation">
          <div className="banner-image banner-image-1"></div>
          <div className="banner-image banner-image-2"></div>
        </div>

        <div className="banner-content">
          <h1>Unlimited movies, TV Shows, and more.</h1>
          <p>Watch anywhere, Cancel anytime.</p>

          <div className="banner-buttons">
            <div className="btn btn-play">Get Started</div>
            <div className="btn btn-info">Learn More</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner