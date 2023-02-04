import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import BlogPostCard2 from '../components/blog-post-card2'
import GalleryCard2 from '../components/gallery-card2'
import BlogPostCard4 from '../components/blog-post-card4'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Mas'Tul</title>
        <meta name="description" content="Beach Club | Bar | Restaurant" />
        <meta property="og:title" content="About - Mas'Tul" />
        <meta
          property="og:description"
          content="Beach Club | Bar | Restaurant"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/af469c8d-b822-45c5-80f3-94b54b452234/4994a0a3-9f14-4ef6-9977-9580ab924499?org_if_sml=1&amp;q=80"
        />
      </Helmet>
      <Header></Header>
      <div className="about-blog">
        <h1 className="about-text">This Week Shows</h1>
        <div className="about-container01">
          <BlogPostCard2
            profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName3"
          ></BlogPostCard2>
        </div>
        <div className="about-container02">
          <BlogPostCard2
            image_src="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName"
          ></BlogPostCard2>
        </div>
        <BlogPostCard2
          image_src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3J0cmFpdCUyMHdvbWFuJTIwY29sb3J8ZW58MHx8fHwxNjI2NDUwNTU4&amp;ixlib=rb-1.2.1&amp;h=1000"
          profile_src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
          rootClassName="rootClassName2"
        ></BlogPostCard2>
      </div>
      <div id="gallery" className="about-gallery">
        <div className="about-container03">
          <div className="about-container04">
            <div className="about-container05">
              <GalleryCard2
                image_src="https://images.unsplash.com/photo-1627020730793-2ccb5cd55e99?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxjbHVifGVufDB8fHx8MTY3NTQzNDcyNw&amp;ixlib=rb-4.0.3&amp;h=1500"
                rootClassName="rootClassName7"
              ></GalleryCard2>
            </div>
            <div className="about-container06">
              <GalleryCard2
                image_src="https://images.unsplash.com/photo-1601297543584-575ace20ed5b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI2fHxjbHVifGVufDB8fHx8MTY3NTQzNDc0NA&amp;ixlib=rb-4.0.3&amp;h=1500"
                rootClassName="rootClassName8"
              ></GalleryCard2>
            </div>
          </div>
          <div className="about-container07">
            <GalleryCard2
              image_src="https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxiYXJ8ZW58MHx8fHwxNjc1NDM0NzU3&amp;ixlib=rb-4.0.3&amp;h=1500"
              rootClassName="rootClassName6"
            ></GalleryCard2>
          </div>
        </div>
        <div className="about-container08">
          <GalleryCard2
            image_src="https://images.unsplash.com/photo-1525268323446-0505b6fe7778?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGJhcnxlbnwwfHx8fDE2NzU0MzQ3NTc&amp;ixlib=rb-4.0.3&amp;h=1500"
            rootClassName="rootClassName1"
          ></GalleryCard2>
        </div>
      </div>
      <div id="blog" className="about-blog1">
        <BlogPostCard4
          label="Travel"
          image_src="https://images.unsplash.com/photo-1638061758086-7f577cf7ab25?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHx0cm9waWMlMjBkcmlua3xlbnwwfHx8fDE2NzU0MzQ3OTg&amp;ixlib=rb-4.0.3&amp;w=1500"
          rootClassName="rootClassName5"
        ></BlogPostCard4>
        <div className="about-container09">
          <BlogPostCard4
            label="Club Party"
            image_src="https://images.unsplash.com/photo-1527271982979-83fea3eb3582?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM3fHx0cm9waWMlMjBkcmlua3xlbnwwfHx8fDE2NzU0MzQ4NTM&amp;ixlib=rb-4.0.3&amp;w=1500"
            rootClassName="rootClassName7"
          ></BlogPostCard4>
          <BlogPostCard4
            image_src="https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHx0cm9waWMlMjBkcmlua3xlbnwwfHx8fDE2NzU0MzQ3OTg&amp;ixlib=rb-4.0.3&amp;w=1500"
            rootClassName="rootClassName8"
          ></BlogPostCard4>
        </div>
        <BlogPostCard4
          date="JULY 10"
          image_src="https://images.unsplash.com/photo-1638061714820-ab12cbbeb87e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHx0cm9waWMlMjBkcmlua3xlbnwwfHx8fDE2NzU0MzQ3OTg&amp;ixlib=rb-4.0.3&amp;w=1500"
          rootClassName="rootClassName6"
        ></BlogPostCard4>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default About
