import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card2.css'

const GalleryCard2 = (props) => {
  return (
    <div
      className={`gallery-card2-gallery-card gradient-box ${props.rootClassName} `}
    >
      <div className="gallery-card2-container">
        <div className="gallery-card2-container1">
          <h2 className="gallery-card2-text">{props.title}</h2>
          <span className="gallery-card2-text1">{props.description}</span>
          <span className="gallery-card2-text2">SHOW MORE</span>
        </div>
      </div>
      <img
        alt={props.image_alt}
        src={props.image_src}
        loading="lazy"
        className="gallery-card2-image"
      />
    </div>
  )
}

GalleryCard2.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&w=1500',
  rootClassName: '',
  image_alt: 'image',
  title: 'Project Title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
}

GalleryCard2.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default GalleryCard2
