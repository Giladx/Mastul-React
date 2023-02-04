import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import FeatureCard4 from '../components/feature-card4'
import GalleryCard2 from '../components/gallery-card2'
import BlogPostCard4 from '../components/blog-post-card4'
import TestimonialCard2 from '../components/testimonial-card2'
import TestimonialCard4 from '../components/testimonial-card4'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
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
        </Head>
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <Link href="/">
            <a className="home-link">
              <img
                alt="logo"
                src="/playground_assets/mastulogo-1500h.webp"
                className="home-logo"
              />
            </a>
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <a href="#features" className="home-link1">
                About
              </a>
              <span className="home-text">Resort</span>
              <span className="home-text01">Restaurant</span>
              <span className="home-text02">Club</span>
              <span className="home-text03">Stuff</span>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-btn-group">
            <button className="home-login button">Contact</button>
            <button className="home-register button">Order</button>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container01">
                <Link href="/">
                  <a className="home-link2">
                    <img
                      alt="image"
                      src="/playground_assets/mastulogo-1500h.webp"
                      className="home-image"
                    />
                  </a>
                </Link>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <span className="home-text04">About</span>
                <span className="home-text05">Resort</span>
                <span className="home-text06">Restaurant</span>
                <span className="home-text07">Club</span>
                <span className="home-text08">Stuff</span>
              </nav>
              <div className="home-container02">
                <button className="home-login1 button">Login</button>
                <button className="button home-register1">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div id="hero" className="home-hero">
          <span className="home-text09">
            <span className="home-text10">Lorem ipsum dolor sit amet</span>
          </span>
          <h1 className="home-text11">Magnificent things are very simple</h1>
          <button className="home-button button">Order Now</button>
        </div>
        <div id="features" className="home-features">
          <h1 className="home-text12">
            <span>Discover Mas&apos;Tul</span>
            <br></br>
          </h1>
          <div className="home-separator"></div>
          <div className="home-container03">
            <div className="home-container04">
              <FeatureCard4
                title="The Resort"
                rootClassName="rootClassName1"
              ></FeatureCard4>
              <FeatureCard4
                title="The Club"
                rootClassName="rootClassName4"
              ></FeatureCard4>
              <FeatureCard4
                title="The Restaurant"
                rootClassName="rootClassName3"
              ></FeatureCard4>
              <FeatureCard4
                title="Top Staff"
                rootClassName="rootClassName2"
              ></FeatureCard4>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1496318447583-f524534e9ce1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHx0cm9waWMlMjBkcmlua3xlbnwwfHx8fDE2NzU0MzQ3OTg&amp;ixlib=rb-4.0.3&amp;w=500"
              className="home-image1"
            />
          </div>
        </div>
        <div id="gallery" className="home-gallery">
          <div className="home-container05">
            <div className="home-container06">
              <div className="home-container07">
                <GalleryCard2
                  image_src="https://images.unsplash.com/photo-1627020730793-2ccb5cd55e99?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxjbHVifGVufDB8fHx8MTY3NTQzNDcyNw&amp;ixlib=rb-4.0.3&amp;h=1500"
                  rootClassName="rootClassName2"
                ></GalleryCard2>
              </div>
              <div className="home-container08">
                <GalleryCard2
                  image_src="https://images.unsplash.com/photo-1601297543584-575ace20ed5b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI2fHxjbHVifGVufDB8fHx8MTY3NTQzNDc0NA&amp;ixlib=rb-4.0.3&amp;h=1500"
                  rootClassName="rootClassName3"
                ></GalleryCard2>
              </div>
            </div>
            <div className="home-container09">
              <GalleryCard2
                image_src="https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxiYXJ8ZW58MHx8fHwxNjc1NDM0NzU3&amp;ixlib=rb-4.0.3&amp;h=1500"
                rootClassName="rootClassName"
              ></GalleryCard2>
            </div>
          </div>
          <div className="home-container10">
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
          <div className="home-container11">
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
          <div className="home-container12">
            <div className="home-container13">
              <div className="home-container14">
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
            <div className="home-container15">
              <TestimonialCard4
                picture_src="https://images.unsplash.com/photo-1482555670981-4de159d8553b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHx0cm9waWMlMjBwYXJ0eSUyMGdpcmx8ZW58MHx8fHwxNjc1NDM0OTQz&amp;ixlib=rb-4.0.3&amp;h=200"
                profile_src="https://images.unsplash.com/photo-1553184118-d20774c4c1db?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMGJ3fGVufDB8fHx8MTYyNjQ1MjI0MA&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName"
              ></TestimonialCard4>
            </div>
          </div>
        </div>
        <footer id="footer" className="home-footer">
          <div className="home-container16">
            <div className="home-logo1">
              <Link href="/">
                <a className="home-link3">
                  <img
                    alt="logo"
                    src="/playground_assets/mastulogo-1500h.webp"
                    className="home-image2"
                  />
                </a>
              </Link>
              <span className="home-text15">Resort | Restaurant | Club </span>
            </div>
            <div className="home-links-container">
              <div className="home-container17">
                <div className="home-product-container">
                  <span className="home-text16">Product</span>
                  <span className="home-text17">Features</span>
                  <span className="home-text18">Pricing</span>
                  <span className="home-text19">Tutorials</span>
                  <span className="home-text20">Releases</span>
                </div>
                <div className="home-company-container">
                  <span className="home-text21">Company</span>
                  <span className="home-text22">About</span>
                  <span className="home-text23">Careers</span>
                  <span className="home-text24">Contact</span>
                  <span className="home-text25">Blog</span>
                </div>
              </div>
              <div className="home-container18">
                <div className="home-contact">
                  <span className="home-text26">Contact Us</span>
                  <span className="home-text27">hello@maya.resort</span>
                  <span className="home-text28">+123 (4567) 890</span>
                </div>
                <div className="home-socials">
                  <span className="home-text29">Follow Us</span>
                  <div className="home-icon-group1">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon10"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon12"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-icon14"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-separator1"></div>
          <span className="home-text30">
            © 2021 Mas&apos;Tul, All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar-interactive {
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
          .home-link {
            display: contents;
          }
          .home-logo {
            height: 4rem;
            text-decoration: none;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link1 {
            color: #ffffff;
            text-decoration: none;
          }
          .home-text {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-text01 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-text02 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-text03 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            color: var(--dl-color-gray-white);
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            margin-right: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-black);
          }
          .home-register {
            color: var(--dl-color-gray-white);
            border-color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
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
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-link2 {
            display: contents;
          }
          .home-image {
            height: 2rem;
            text-decoration: none;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text08 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container02 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login1 {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon-group {
            display: flex;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/2_16%20-%20foto-1500w.jpg');
            background-position: center;
          }
          .home-text09 {
            color: var(--dl-color-gray-black);
            font-size: 0.75rem;
            letter-spacing: 2px;
          }
          .home-text10 {
            text-transform: uppercase;
          }
          .home-text11 {
            color: var(--dl-color-gray-black);
            font-size: 3rem;
            max-width: 450px;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-button {
            color: var(--dl-color-gray-white);
            font-size: 35px;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: #a17208;
          }
          .home-button:hover {
            transform: scale(1.02);
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 100%;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .home-text12 {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-separator {
            width: 100px;
            height: 2px;
            background-color: var(--dl-color-gray-white);
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container04 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .home-image1 {
            width: 450px;
            height: 450px;
            object-fit: cover;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-round);
            object-position: left;
          }
          .home-gallery {
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
          .home-container05 {
            flex: 3;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container06 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-container07 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container08 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container09 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container10 {
            flex: 2;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 100%;
            align-items: center;
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
          }
          .home-container11 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-testimonial {
            width: 100%;
            display: flex;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/2_16%20-%20foto-1500w.jpg');
            background-position: center;
          }
          .home-container12 {
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: stretch;
            justify-content: space-between;
          }
          .home-container13 {
            flex: 2;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container14 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container15 {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-footer {
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
          .home-container16 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-logo1 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link3 {
            display: contents;
          }
          .home-image2 {
            height: 4rem;
            text-decoration: none;
          }
          .home-text15 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container17 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text16 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text17 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text18 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text19 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text20 {
            color: var(--dl-color-gray-white);
          }
          .home-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text21 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text22 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text23 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text24 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text25 {
            color: var(--dl-color-gray-white);
          }
          .home-container18 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text26 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text27 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text28 {
            color: var(--dl-color-gray-white);
          }
          .home-socials {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text29 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon10 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon12 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon14 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-separator1 {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .home-text30 {
            color: var(--dl-color-gray-white);
            align-self: center;
          }
          @media (max-width: 1600px) {
            .home-hero {
              background-size: cover;
              background-image: url('/playground_assets/2_16%20-%20foto-1500w.jpg');
            }
            .home-text11 {
              color: var(--dl-color-gray-black);
            }
          }
          @media (max-width: 1200px) {
            .home-navbar-interactive {
              background-color: var(--dl-color-gray-black);
            }
            .home-link1 {
              color: var(--dl-color-gray-white);
            }
            .home-text {
              color: var(--dl-color-gray-white);
            }
            .home-text01 {
              color: var(--dl-color-gray-white);
            }
            .home-text02 {
              color: var(--dl-color-gray-white);
            }
            .home-text03 {
              color: var(--dl-color-gray-white);
            }
            .home-login {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              border-width: 1px;
              background-color: var(--dl-color-gray-black);
            }
            .home-register {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
            .home-button {
              color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
          }
          @media (max-width: 991px) {
            .home-desktop-menu {
              display: none;
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-icon {
              fill: var(--dl-color-gray-white);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .home-mobile-menu {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
              background-color: var(--dl-color-gray-black);
            }
            .home-image {
              height: 4rem;
            }
            .home-icon02 {
              fill: #d9d9d9;
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .home-text04 {
              color: var(--dl-color-gray-white);
            }
            .home-text05 {
              color: var(--dl-color-gray-white);
            }
            .home-text06 {
              color: var(--dl-color-gray-white);
            }
            .home-text07 {
              color: var(--dl-color-gray-white);
            }
            .home-text08 {
              color: var(--dl-color-gray-white);
            }
            .home-login1 {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
            .home-register1 {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
            .home-icon04 {
              fill: #d9d9d9;
            }
            .home-icon06 {
              fill: #d9d9d9;
            }
            .home-icon08 {
              fill: #d9d9d9;
            }
            .home-features {
              align-items: center;
            }
            .home-container03 {
              flex-direction: column;
            }
            .home-image1 {
              width: 300px;
              height: 300px;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
            }
            .home-container10 {
              width: 100%;
            }
            .home-container12 {
              flex-direction: column;
            }
            .home-container13 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-footer {
              flex-direction: column;
            }
            .home-container17 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text {
              margin-left: var(--dl-space-space-unit);
            }
            .home-text01 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-text02 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-text03 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text12 {
              text-align: center;
            }
            .home-container03 {
              flex-direction: column;
            }
            .home-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container06 {
              flex-direction: column;
            }
            .home-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-container11 {
              flex: 0 0 auto;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-container12 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container16 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-logo1 {
              align-items: center;
            }
            .home-image2 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-text15 {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .home-container17 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-icon {
              fill: #d9d9d9;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-icon02 {
              fill: #d9d9d9;
            }
            .home-text04 {
              color: var(--dl-color-gray-white);
            }
            .home-text05 {
              color: var(--dl-color-gray-white);
            }
            .home-text06 {
              color: var(--dl-color-gray-white);
            }
            .home-text07 {
              color: var(--dl-color-gray-white);
            }
            .home-text08 {
              color: var(--dl-color-gray-white);
            }
            .home-login1 {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
            .home-register1 {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
            .home-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text12 {
              color: var(--dl-color-gray-white);
              font-size: 3rem;
            }
            .home-container04 {
              grid-template-columns: 1fr;
            }
            .home-image1 {
              width: 250px;
              height: 250px;
            }
            .home-gallery {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-container05 {
              width: auto;
            }
            .home-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container12 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
            }
            .home-container16 {
              align-items: center;
              flex-direction: column;
            }
            .home-image2 {
              margin-bottom: 0px;
            }
            .home-text15 {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-links-container {
              align-items: center;
              flex-direction: column;
            }
            .home-container17 {
              margin-right: 0px;
            }
            .home-container18 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .home-contact {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text30 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
