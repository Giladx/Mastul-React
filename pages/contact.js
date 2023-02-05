import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Header from '../components/header'
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
          MLink1="/about"
          MLink2="https://mayaroyale.com"
          MLink4="https://mas-tul.com"
          link_1="/about"
          link_2="https://mayaroyale.com"
          link_4="https://mas-tul.com"
          LogoImage="/playground_assets/mastulogo2-1500h.webp"
          MLogoImage="/playground_assets/mastulogo2-1500h.webp"
          ButtonLink1="/contact"
        ></Header>
        <div className="contact-main">
          <div className="contact-div">
            <DangerousHTML
              html={`<iframe id="" allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" src="https://my.forms.app/form/63dedafe6c5c2579e21b2c00?localData=true" frameborder="0" style="width: 1px; min-width:100%; height:500px; border:none;"></iframe>`}
            ></DangerousHTML>
          </div>
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
            width: 100%;
            height: 500px;
            display: flex;
            align-items: flex-start;
          }
          .contact-div {
            width: 100%;
            height: auto;
          }
          @media (max-width: 1600px) {
            .contact-main {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .contact-main {
              height: 50vh;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
