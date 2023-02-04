import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import BlogPostCard2 from '../components/blog-post-card2'
import GalleryCard2 from '../components/gallery-card2'
import BlogPostCard4 from '../components/blog-post-card4'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
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
        </Head>
        <Header
          LogoImage="/playground_assets/mastulogo2-1500h.webp"
          link_1="/about"
          link_2="https://mayaroyale.com"
          NavLink2="https://mayaroyale.com"
          link_4="https://mas-tul.com"
          MLink4="https://mas-tul.com"
          MLogoImage="/playground_assets/mastulogo2-1500h.webp"
          MLink1="/about"
        ></Header>
        <div className="about-blog">
          <h1 data-aos="fade-down" className="about-text">
            This Week Shows
          </h1>
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
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .about-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: 48px;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-text {
            color: var(--dl-color-gray-white);
            font-size: 4em;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-container01 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .about-container02 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .about-gallery {
            width: 100%;
            height: 1000px;
            display: flex;
            max-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-black);
          }
          .about-container03 {
            flex: 3;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-container04 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .about-container05 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-container06 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-container07 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
          }
          .about-container08 {
            flex: 2;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-blog1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 100%;
            align-items: center;
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
          }
          .about-container09 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          @media (max-width: 991px) {
            .about-container08 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .about-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-container04 {
              flex-direction: column;
            }
            .about-blog1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .about-container09 {
              flex: 0 0 auto;
              margin-left: 0px;
              margin-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .about-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-gallery {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .about-container03 {
              width: auto;
            }
            .about-blog1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default About
