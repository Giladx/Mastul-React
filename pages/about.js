import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import BlogPostCard2 from '../components/blog-post-card2'
import GalleryCard2 from '../components/gallery-card2'
import BlogPostCard4 from '../components/blog-post-card4'

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
        <header data-thq="thq-navbar" className="about-navbar-interactive">
          <Link href="/">
            <a className="about-link">
              <img
                alt="logo"
                src="/playground_assets/mastulogo-1500h.webp"
                className="about-logo"
              />
            </a>
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="about-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="about-nav"
            >
              <Link href="/about">
                <a className="about-link1">About</a>
              </Link>
              <span className="about-text">Resort</span>
              <span className="about-text01">Restaurant</span>
              <span className="about-text02">Club</span>
              <span className="about-text03">Stuff</span>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="about-btn-group">
            <button className="about-login button">Contact</button>
            <button className="about-register button">Order</button>
          </div>
          <div data-thq="thq-burger-menu" className="about-burger-menu">
            <svg viewBox="0 0 1024 1024" className="about-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="about-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="about-nav1"
            >
              <div className="about-container01">
                <Link href="/">
                  <a className="about-link2">
                    <img
                      alt="image"
                      src="/playground_assets/mastulogo-1500h.webp"
                      className="about-image"
                    />
                  </a>
                </Link>
                <div data-thq="thq-close-menu" className="about-menu-close">
                  <svg viewBox="0 0 1024 1024" className="about-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="about-nav2"
              >
                <span className="about-text04">About</span>
                <span className="about-text05">Resort</span>
                <span className="about-text06">Restaurant</span>
                <span className="about-text07">Club</span>
                <span className="about-text08">Stuff</span>
              </nav>
              <div className="about-container02">
                <button className="about-login1 button">Login</button>
                <button className="button about-register1">Register</button>
              </div>
            </div>
            <div className="about-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="about-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="about-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="about-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="about-hero">
          <span className="about-text09">
            <span className="about-text10">Lorem ipsum dolor sit amet</span>
          </span>
          <h1 className="about-text11">Magnificent things are very simple</h1>
          <button className="about-button button">Get Started</button>
        </div>
        <div className="about-blog">
          <h1 className="about-text12">This Week Shows</h1>
          <div className="about-container03">
            <BlogPostCard2
              profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName3"
            ></BlogPostCard2>
          </div>
          <div className="about-container04">
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
          <div className="about-container05">
            <div className="about-container06">
              <div className="about-container07">
                <GalleryCard2
                  image_src="https://images.unsplash.com/photo-1627020730793-2ccb5cd55e99?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxjbHVifGVufDB8fHx8MTY3NTQzNDcyNw&amp;ixlib=rb-4.0.3&amp;h=1500"
                  rootClassName="rootClassName7"
                ></GalleryCard2>
              </div>
              <div className="about-container08">
                <GalleryCard2
                  image_src="https://images.unsplash.com/photo-1601297543584-575ace20ed5b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI2fHxjbHVifGVufDB8fHx8MTY3NTQzNDc0NA&amp;ixlib=rb-4.0.3&amp;h=1500"
                  rootClassName="rootClassName8"
                ></GalleryCard2>
              </div>
            </div>
            <div className="about-container09">
              <GalleryCard2
                image_src="https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxiYXJ8ZW58MHx8fHwxNjc1NDM0NzU3&amp;ixlib=rb-4.0.3&amp;h=1500"
                rootClassName="rootClassName6"
              ></GalleryCard2>
            </div>
          </div>
          <div className="about-container10">
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
          <div className="about-container11">
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
        <footer id="footer" className="about-footer">
          <div className="about-container12">
            <div className="about-logo1">
              <Link href="/">
                <a className="about-link3">
                  <img
                    alt="logo"
                    src="/playground_assets/mastulogo-1500h.webp"
                    className="about-image1"
                  />
                </a>
              </Link>
              <span className="about-text13">Resort | Restaurant | Club </span>
            </div>
            <div className="about-links-container">
              <div className="about-container13">
                <div className="about-product-container">
                  <span className="about-text14">Product</span>
                  <span className="about-text15">Features</span>
                  <span className="about-text16">Pricing</span>
                  <span className="about-text17">Tutorials</span>
                  <span className="about-text18">Releases</span>
                </div>
                <div className="about-company-container">
                  <span className="about-text19">Company</span>
                  <span className="about-text20">About</span>
                  <span className="about-text21">Careers</span>
                  <span className="about-text22">Contact</span>
                  <span className="about-text23">Blog</span>
                </div>
              </div>
              <div className="about-container14">
                <div className="about-contact">
                  <span className="about-text24">Contact Us</span>
                  <span className="about-text25">hello@maya.resort</span>
                  <span className="about-text26">+123 (4567) 890</span>
                </div>
                <div className="about-socials">
                  <span className="about-text27">Follow Us</span>
                  <div className="about-icon-group1">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="about-icon10"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-icon12"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="about-icon14"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-separator"></div>
          <span className="about-text28">
            © 2021 Mas&apos;Tul, All Rights Reserved.
          </span>
        </footer>
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
          .about-navbar-interactive {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
          }
          .about-link {
            display: contents;
          }
          .about-logo {
            height: 4rem;
            text-decoration: none;
          }
          .about-desktop-menu {
            display: flex;
          }
          .about-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .about-link1 {
            color: #ffffff;
            text-decoration: none;
          }
          .about-text {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .about-text01 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .about-text02 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .about-text03 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .about-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-login {
            color: var(--dl-color-gray-white);
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            margin-right: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-black);
          }
          .about-register {
            color: var(--dl-color-gray-white);
            border-color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .about-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .about-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .about-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateY(-100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .about-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .about-link2 {
            display: contents;
          }
          .about-image {
            height: 2rem;
            text-decoration: none;
          }
          .about-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .about-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .about-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text08 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-container02 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .about-login1 {
            margin-right: var(--dl-space-space-twounits);
          }
          .about-icon-group {
            display: flex;
          }
          .about-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .about-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .about-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .about-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/2_16%20-%20foto-1500h.jpg');
            background-position: center;
          }
          .about-text09 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            letter-spacing: 2px;
          }
          .about-text10 {
            text-transform: uppercase;
          }
          .about-text11 {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
            max-width: 450px;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-button {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .about-button:hover {
            transform: scale(1.02);
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
          .about-text12 {
            color: var(--dl-color-gray-white);
            font-size: 4em;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-container03 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .about-container04 {
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
          .about-container05 {
            flex: 3;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-container06 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .about-container07 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-container08 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-container09 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
          }
          .about-container10 {
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
          .about-container11 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-footer {
            width: 100%;
            display: flex;
            max-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
          }
          .about-container12 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-logo1 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .about-link3 {
            display: contents;
          }
          .about-image1 {
            height: 4rem;
            text-decoration: none;
          }
          .about-text13 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .about-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-container13 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-text14 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text15 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text16 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text17 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text18 {
            color: var(--dl-color-gray-white);
          }
          .about-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-text19 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text20 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text21 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text22 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text23 {
            color: var(--dl-color-gray-white);
          }
          .about-container14 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-text24 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text25 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text26 {
            color: var(--dl-color-gray-white);
          }
          .about-socials {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-text27 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-icon10 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
          }
          .about-icon12 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
          }
          .about-icon14 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .about-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .about-text28 {
            color: var(--dl-color-gray-white);
            align-self: center;
          }
          @media (max-width: 1200px) {
            .about-navbar-interactive {
              background-color: var(--dl-color-gray-black);
            }
            .about-link1 {
              color: var(--dl-color-gray-white);
            }
            .about-text {
              color: var(--dl-color-gray-white);
            }
            .about-text01 {
              color: var(--dl-color-gray-white);
            }
            .about-text02 {
              color: var(--dl-color-gray-white);
            }
            .about-text03 {
              color: var(--dl-color-gray-white);
            }
            .about-login {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              border-width: 1px;
              background-color: var(--dl-color-gray-black);
            }
            .about-register {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
          }
          @media (max-width: 991px) {
            .about-desktop-menu {
              display: none;
            }
            .about-btn-group {
              display: none;
            }
            .about-burger-menu {
              display: flex;
            }
            .about-icon {
              fill: var(--dl-color-gray-white);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .about-mobile-menu {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
              background-color: var(--dl-color-gray-black);
            }
            .about-image {
              height: 4rem;
            }
            .about-icon02 {
              fill: #d9d9d9;
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .about-text04 {
              color: var(--dl-color-gray-white);
            }
            .about-text05 {
              color: var(--dl-color-gray-white);
            }
            .about-text06 {
              color: var(--dl-color-gray-white);
            }
            .about-text07 {
              color: var(--dl-color-gray-white);
            }
            .about-text08 {
              color: var(--dl-color-gray-white);
            }
            .about-login1 {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
            .about-register1 {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
            .about-icon04 {
              fill: #d9d9d9;
            }
            .about-icon06 {
              fill: #d9d9d9;
            }
            .about-icon08 {
              fill: #d9d9d9;
            }
            .about-container10 {
              width: 100%;
            }
            .about-footer {
              flex-direction: column;
            }
            .about-container13 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .about-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .about-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-text {
              margin-left: var(--dl-space-space-unit);
            }
            .about-text01 {
              margin-left: var(--dl-space-space-unit);
            }
            .about-text02 {
              margin-left: var(--dl-space-space-unit);
            }
            .about-text03 {
              margin-left: var(--dl-space-space-unit);
            }
            .about-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-container06 {
              flex-direction: column;
            }
            .about-blog1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .about-container11 {
              flex: 0 0 auto;
              margin-left: 0px;
              margin-right: 0px;
            }
            .about-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-container12 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .about-logo1 {
              align-items: center;
            }
            .about-image1 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-text13 {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .about-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .about-container13 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .about-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .about-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .about-icon {
              fill: #d9d9d9;
            }
            .about-mobile-menu {
              padding: 16px;
            }
            .about-icon02 {
              fill: #d9d9d9;
            }
            .about-text04 {
              color: var(--dl-color-gray-white);
            }
            .about-text05 {
              color: var(--dl-color-gray-white);
            }
            .about-text06 {
              color: var(--dl-color-gray-white);
            }
            .about-text07 {
              color: var(--dl-color-gray-white);
            }
            .about-text08 {
              color: var(--dl-color-gray-white);
            }
            .about-login1 {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
            .about-register1 {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
            .about-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
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
            .about-container05 {
              width: auto;
            }
            .about-blog1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-footer {
              padding: var(--dl-space-space-unit);
            }
            .about-container12 {
              align-items: center;
              flex-direction: column;
            }
            .about-image1 {
              margin-bottom: 0px;
            }
            .about-text13 {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .about-links-container {
              align-items: center;
              flex-direction: column;
            }
            .about-container13 {
              margin-right: 0px;
            }
            .about-container14 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .about-contact {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-text28 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default About
