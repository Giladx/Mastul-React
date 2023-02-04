import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <>
      <div className={`header-header ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="header-navbar-interactive">
          <Link href="/">
            <a className="header-link">
              <img
                alt={props.Logo_alt}
                src={props.Logo_src}
                className="header-logo"
              />
            </a>
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="header-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="header-nav"
            >
              <Link href="/about">
                <a className="header-link1">{props.text}</a>
              </Link>
              <span className="header-text">{props.text1}</span>
              <span className="header-text1">{props.text2}</span>
              <span className="header-text2">{props.text3}</span>
              <span className="header-text3">{props.text4}</span>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="header-btn-group">
            <button className="header-login button">{props.Login}</button>
            <button className="header-register button">{props.Register}</button>
          </div>
          <div data-thq="thq-burger-menu" className="header-burger-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="header-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="header-nav1"
            >
              <div className="header-container">
                <Link href="/">
                  <a className="header-link2">
                    <img
                      alt={props.image_alt}
                      src={props.image_src}
                      className="header-image"
                    />
                  </a>
                </Link>
                <div data-thq="thq-close-menu" className="header-menu-close">
                  <svg viewBox="0 0 1024 1024" className="header-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="header-nav2"
              >
                <Link href="/about">
                  <a className="header-link3">{props.text5}</a>
                </Link>
                <span className="header-text4">{props.text6}</span>
                <span className="header-text5">{props.text7}</span>
                <span className="header-text6">{props.text8}</span>
                <span className="header-text7">{props.text9}</span>
              </nav>
              <div className="header-container1">
                <button className="header-login1 button">{props.Login1}</button>
                <button className="button header-register1">
                  {props.Register1}
                </button>
              </div>
            </div>
            <div className="header-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="header-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="header-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="header-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .header-header {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .header-navbar-interactive {
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
          .header-link {
            display: contents;
          }
          .header-logo {
            height: 4rem;
            text-decoration: none;
          }
          .header-desktop-menu {
            display: flex;
          }
          .header-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .header-link1 {
            color: #ffffff;
            text-decoration: none;
          }
          .header-text {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .header-text1 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .header-text2 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .header-text3 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .header-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-login {
            color: var(--dl-color-gray-white);
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            margin-right: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-black);
          }
          .header-register {
            color: var(--dl-color-gray-white);
            border-color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .header-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .header-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .header-mobile-menu {
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
          .header-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-container {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .header-link2 {
            display: contents;
          }
          .header-image {
            height: 2rem;
            text-decoration: none;
          }
          .header-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .header-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-link3 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header-text4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-text5 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-text6 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-text7 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-container1 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .header-login1 {
            margin-right: var(--dl-space-space-twounits);
          }
          .header-icon-group {
            display: flex;
          }
          .header-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .header-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .header-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 1200px) {
            .header-navbar-interactive {
              background-color: var(--dl-color-gray-black);
            }
            .header-link1 {
              color: var(--dl-color-gray-white);
            }
            .header-text {
              color: var(--dl-color-gray-white);
            }
            .header-text1 {
              color: var(--dl-color-gray-white);
            }
            .header-text2 {
              color: var(--dl-color-gray-white);
            }
            .header-text3 {
              color: var(--dl-color-gray-white);
            }
            .header-login {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              border-width: 1px;
              background-color: var(--dl-color-gray-black);
            }
            .header-register {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
          }
          @media (max-width: 991px) {
            .header-header {
              height: auto;
            }
            .header-desktop-menu {
              display: none;
            }
            .header-btn-group {
              display: none;
            }
            .header-burger-menu {
              display: flex;
            }
            .header-icon {
              fill: var(--dl-color-gray-white);
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .header-mobile-menu {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
              background-color: var(--dl-color-gray-black);
            }
            .header-image {
              height: 4rem;
            }
            .header-icon02 {
              fill: #d9d9d9;
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .header-link3 {
              color: var(--dl-color-gray-white);
              font-size: 3em;
            }
            .header-text4 {
              color: var(--dl-color-gray-white);
              font-size: 3em;
            }
            .header-text5 {
              color: var(--dl-color-gray-white);
              font-size: 3em;
            }
            .header-text6 {
              color: var(--dl-color-gray-white);
              font-size: 3em;
            }
            .header-text7 {
              color: var(--dl-color-gray-white);
              font-size: 3em;
            }
            .header-login1 {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
            .header-register1 {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
            .header-icon04 {
              fill: #d9d9d9;
            }
            .header-icon06 {
              fill: #d9d9d9;
            }
            .header-icon08 {
              fill: #d9d9d9;
            }
          }
          @media (max-width: 767px) {
            .header-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .header-text {
              margin-left: var(--dl-space-space-unit);
            }
            .header-text1 {
              margin-left: var(--dl-space-space-unit);
            }
            .header-text2 {
              margin-left: var(--dl-space-space-unit);
            }
            .header-text3 {
              margin-left: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .header-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .header-icon {
              fill: #d9d9d9;
            }
            .header-mobile-menu {
              padding: 16px;
            }
            .header-icon02 {
              fill: #d9d9d9;
            }
            .header-link3 {
              color: var(--dl-color-gray-white);
              font-size: 3em;
            }
            .header-text4 {
              color: var(--dl-color-gray-white);
              font-size: 3em;
            }
            .header-text5 {
              color: var(--dl-color-gray-white);
              font-size: 3em;
            }
            .header-text6 {
              color: var(--dl-color-gray-white);
              font-size: 3em;
            }
            .header-text7 {
              color: var(--dl-color-gray-white);
              font-size: 3em;
            }
            .header-login1 {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
            .header-register1 {
              color: var(--dl-color-gray-white);
              border-color: var(--dl-color-gray-white);
              background-color: var(--dl-color-gray-black);
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  Login: 'Contact',
  Register1: 'Register',
  Logo_alt: 'logo',
  text7: 'Restaurant',
  text2: 'Restaurant',
  text9: 'Stuff',
  text3: 'Club',
  text1: 'Resort',
  text: 'About',
  text5: 'About',
  text6: 'Resort',
  Register: 'Order',
  image_src: '/playground_assets/mastulogo-1500h.webp',
  image_alt: 'image',
  text4: 'Stuff',
  text8: 'Club',
  rootClassName: '',
  Login1: 'Login',
  Logo_src: '/playground_assets/mastulogo-1500h.webp',
}

Header.propTypes = {
  Login: PropTypes.string,
  Register1: PropTypes.string,
  Logo_alt: PropTypes.string,
  text7: PropTypes.string,
  text2: PropTypes.string,
  text9: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  Register: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text4: PropTypes.string,
  text8: PropTypes.string,
  rootClassName: PropTypes.string,
  Login1: PropTypes.string,
  Logo_src: PropTypes.string,
}

export default Header
