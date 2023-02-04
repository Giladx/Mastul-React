import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './blog-post-card4.css'

const BlogPostCard4 = (props) => {
  return (
    <div
      className={`blog-post-card4-blog-post-card gradient-box ${props.rootClassName} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        loading="lazy"
        className="blog-post-card4-image"
      />
      <div className="blog-post-card4-container">
        <span className="blog-post-card4-text">{props.date}</span>
        <span className="blog-post-card4-text1">{props.description}</span>
        <div className="blog-post-card4-separator"></div>
        <span className="blog-post-card4-text2">{props.label}</span>
      </div>
      <div className="">
        <DangerousHTML
          html={`<style>
    .gradient-box {
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
                  radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
    border: 3px solid transparent;
    background-repeat: no-repeat;
    background-origin: padding-box, border-box;
  }
</style>
`}
          className=""
        ></DangerousHTML>
      </div>
    </div>
  )
}

BlogPostCard4.defaultProps = {
  description:
    'Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  date: 'JULY 24',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&ixlib=rb-1.2.1&w=1500',
  image_alt: 'image',
  label: 'Food & Drink',
}

BlogPostCard4.propTypes = {
  description: PropTypes.string,
  date: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  label: PropTypes.string,
}

export default BlogPostCard4
