import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard4 from '../components/feature-card4'
import GalleryCard2 from '../components/gallery-card2'
import BlogPostCard4 from '../components/blog-post-card4'
import TestimonialCard2 from '../components/testimonial-card2'
import TestimonialCard4 from '../components/testimonial-card4'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Mas'Tul</title>
        <meta name="description" content="Beach Club | Bar | Restaurant" />
        <meta property="og:title" content="Mas'Tul" />
        <meta
          property="og:description"
          content="Beach Club | Bar | Restaurant"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/af469c8d-b822-45c5-80f3-94b54b452234/4994a0a3-9f14-4ef6-9977-9580ab924499?org_if_sml=1&amp;q=80"
        />
      </Helmet>
      <Header
        link_1="/about"
        rootClassName="header-root-class-name"
        LoginButtonText="Contact"
      ></Header>
      <div id="hero" className="home-hero">
        <span className="home-text">
          <span className="home-text1">Lorem ipsum dolor sit amet</span>
        </span>
        <h1 className="home-text2">Magnificent things are very simple</h1>
        <button className="home-button button">Order Now</button>
      </div>
      <div id="features" className="home-features">
        <h1 className="home-text3">
          <span>Discover Mas&apos;Tul</span>
          <br></br>
        </h1>
        <div className="home-separator"></div>
        <div className="home-container01">
          <div className="home-container02">
            <FeatureCard4
              Title="The Resort"
              rootClassName="rootClassName1"
            ></FeatureCard4>
            <FeatureCard4
              Title="The Club"
              rootClassName="rootClassName4"
            ></FeatureCard4>
            <FeatureCard4
              Title="The Restaurant"
              rootClassName="rootClassName3"
            ></FeatureCard4>
            <FeatureCard4
              Title="Top Staff"
              rootClassName="rootClassName2"
            ></FeatureCard4>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1496318447583-f524534e9ce1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHx0cm9waWMlMjBkcmlua3xlbnwwfHx8fDE2NzU0MzQ3OTg&amp;ixlib=rb-4.0.3&amp;w=500"
            loading="lazy"
            className="home-image"
          />
        </div>
      </div>
      <div id="gallery" className="home-gallery">
        <div className="home-container03">
          <div className="home-container04">
            <div className="home-container05">
              <GalleryCard2
                image_src="https://images.unsplash.com/photo-1627020730793-2ccb5cd55e99?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxjbHVifGVufDB8fHx8MTY3NTQzNDcyNw&amp;ixlib=rb-4.0.3&amp;h=1500"
                rootClassName="rootClassName2"
              ></GalleryCard2>
            </div>
            <div className="home-container06">
              <GalleryCard2
                image_src="https://images.unsplash.com/photo-1601297543584-575ace20ed5b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI2fHxjbHVifGVufDB8fHx8MTY3NTQzNDc0NA&amp;ixlib=rb-4.0.3&amp;h=1500"
                rootClassName="rootClassName3"
              ></GalleryCard2>
            </div>
          </div>
          <div className="home-container07">
            <GalleryCard2
              image_src="https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxiYXJ8ZW58MHx8fHwxNjc1NDM0NzU3&amp;ixlib=rb-4.0.3&amp;h=1500"
              rootClassName="rootClassName"
            ></GalleryCard2>
          </div>
        </div>
        <div className="home-container08">
          <GalleryCard2
            image_src="https://images.unsplash.com/photo-1525268323446-0505b6fe7778?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGJhcnxlbnwwfHx8fDE2NzU0MzQ3NTc&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="rootClassName4"
          ></GalleryCard2>
        </div>
      </div>
      <div id="blog" className="home-blog">
        <BlogPostCard4
          label="Travel"
          image_src="https://images.unsplash.com/photo-1638061758086-7f577cf7ab25?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHx0cm9waWMlMjBkcmlua3xlbnwwfHx8fDE2NzU0MzQ3OTg&amp;ixlib=rb-4.0.3&amp;w=1500"
          rootClassName="rootClassName1"
        ></BlogPostCard4>
        <div className="home-container09">
          <BlogPostCard4
            label="Club Party"
            image_src="https://images.unsplash.com/photo-1527271982979-83fea3eb3582?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM3fHx0cm9waWMlMjBkcmlua3xlbnwwfHx8fDE2NzU0MzQ4NTM&amp;ixlib=rb-4.0.3&amp;w=1500"
            rootClassName="rootClassName2"
          ></BlogPostCard4>
          <BlogPostCard4
            image_src="https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHx0cm9waWMlMjBkcmlua3xlbnwwfHx8fDE2NzU0MzQ3OTg&amp;ixlib=rb-4.0.3&amp;w=1500"
            rootClassName="rootClassName3"
          ></BlogPostCard4>
        </div>
        <BlogPostCard4
          date="JULY 10"
          image_src="https://images.unsplash.com/photo-1638061714820-ab12cbbeb87e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHx0cm9waWMlMjBkcmlua3xlbnwwfHx8fDE2NzU0MzQ3OTg&amp;ixlib=rb-4.0.3&amp;w=1500"
          rootClassName="rootClassName4"
        ></BlogPostCard4>
      </div>
      <div id="testimonial" className="home-testimonial">
        <div className="home-container10">
          <div className="home-container11">
            <div className="home-container12">
              <TestimonialCard2
                profile_src="https://images.unsplash.com/photo-1638061758086-7f577cf7ab25?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHx0cm9waWMlMjBkcmlua3xlbnwwfHx8fDE2NzU0MzQ3OTg&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="rootClassName1"
              ></TestimonialCard2>
            </div>
            <TestimonialCard2
              profile_src="https://images.unsplash.com/photo-1638061714820-ab12cbbeb87e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHx0cm9waWMlMjBkcmlua3xlbnwwfHx8fDE2NzU0MzQ3OTg&amp;ixlib=rb-4.0.3&amp;h=200"
              rootClassName="rootClassName2"
            ></TestimonialCard2>
          </div>
          <div className="home-container13">
            <TestimonialCard4
              picture_src="https://images.unsplash.com/photo-1482555670981-4de159d8553b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHx0cm9waWMlMjBwYXJ0eSUyMGdpcmx8ZW58MHx8fHwxNjc1NDM0OTQz&amp;ixlib=rb-4.0.3&amp;h=200"
              profile_src="https://images.unsplash.com/photo-1553184118-d20774c4c1db?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMGJ3fGVufDB8fHx8MTYyNjQ1MjI0MA&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
            ></TestimonialCard4>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
