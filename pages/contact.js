import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Header from '../components/header'
import BlogPostCard4 from '../components/blog-post-card4'
import Footer from '../components/footer'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - Mas'Tul</title>
          <meta name="description" content="Beach Club | Bar | Restaurant" />
          <meta property="og:title" content="Contact - Mas'Tul" />
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
          MLink4="https://mas-tul.com"
          MLogoImage="/playground_assets/mastulogo2-1500h.webp"
          MLink1="/about"
          link_4="https://mas-tul.com"
          MLink2="https://mayaroyale.com"
          ButtonLink1="/contact"
        ></Header>
        <div className="contact-main">
          <div>
            <DangerousHTML
              html={`<div formsappId="63dedafe6c5c2579e21b2c00"></div><script src="https://my.forms.app/static/iframe.js" type="text/javascript"></script><script>new formsapp('63dedafe6c5c2579e21b2c00', {width: '100%',height: '100vh'});</script>`}
            ></DangerousHTML>
          </div>
        </div>
        <div id="blog" className="contact-blog">
          <BlogPostCard4
            label="Travel"
            image_src="https://images.unsplash.com/photo-1638061758086-7f577cf7ab25?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHx0cm9waWMlMjBkcmlua3xlbnwwfHx8fDE2NzU0MzQ3OTg&amp;ixlib=rb-4.0.3&amp;w=1500"
            rootClassName="rootClassName9"
          ></BlogPostCard4>
          <div className="contact-container1">
            <BlogPostCard4
              label="Club Party"
              image_src="https://images.unsplash.com/photo-1527271982979-83fea3eb3582?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM3fHx0cm9waWMlMjBkcmlua3xlbnwwfHx8fDE2NzU0MzQ4NTM&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName11"
            ></BlogPostCard4>
            <BlogPostCard4
              image_src="https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHx0cm9waWMlMjBkcmlua3xlbnwwfHx8fDE2NzU0MzQ3OTg&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName12"
            ></BlogPostCard4>
          </div>
          <BlogPostCard4
            date="JULY 10"
            image_src="https://images.unsplash.com/photo-1638061714820-ab12cbbeb87e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHx0cm9waWMlMjBkcmlua3xlbnwwfHx8fDE2NzU0MzQ3OTg&amp;ixlib=rb-4.0.3&amp;w=1500"
            rootClassName="rootClassName10"
          ></BlogPostCard4>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .contact-main {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .contact-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 100%;
            align-items: center;
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
          }
          .contact-container1 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          @media (max-width: 1600px) {
            .contact-main {
              height: auto;
            }
          }
          @media (max-width: 767px) {
            .contact-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .contact-container1 {
              flex: 0 0 auto;
              margin-left: 0px;
              margin-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .contact-blog {
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

export default Contact
