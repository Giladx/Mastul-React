import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer id="footer" className={`footer-footer ${props.rootClassName} `}>
        <div className="footer-container">
          <div className="footer-logo">
            <a
              href={props.FLogoImage}
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
            >
              <img
                alt={props.FLogoAlt}
                src={props.FLogoImageUrl}
                className="footer-image"
              />
            </a>
            <span className="footer-text">{props.Description}</span>
          </div>
          <div className="footer-links-container">
            <div className="footer-container1">
              <div className="footer-product-container">
                <span className="footer-title1">{props.Title1}</span>
                <a
                  href={props.LinkURL1}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link1"
                >
                  {props.LinkText1}
                </a>
                <a
                  href={props.LinkURL2}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link2"
                >
                  {props.LinkText2}
                </a>
                <a
                  href={props.LinkURL3}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link3"
                >
                  {props.LinkText3}
                </a>
                <a
                  href={props.LinkURL4}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link4"
                >
                  {props.LinkText4}
                </a>
              </div>
              <div className="footer-company-container">
                <span className="footer-title2">{props.Title2}</span>
                <a
                  href={props.LinkURL5}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link21"
                >
                  {props.LinkText2_1}
                </a>
                <a
                  href={props.LinkURL6}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link22"
                >
                  {props.LinkText2_2}
                </a>
                <a
                  href={props.LinkURL7}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link23"
                >
                  {props.LinkText2_3}
                </a>
                <a
                  href={props.LinkURL8}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link24"
                >
                  {props.LinkText2_4}
                </a>
              </div>
            </div>
            <div className="footer-container2">
              <div className="footer-contact">
                <span className="footer-title3">{props.Title3}</span>
                <a
                  href={props.EmailAdd}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-email"
                >
                  {props.Email}
                </a>
                <a
                  href={props.PhoneNo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-phone"
                >
                  {props.Phone}
                </a>
              </div>
              <div className="footer-socials">
                <span className="footer-text1">{props.Title4}</span>
                <div className="footer-icon-group">
                  <a
                    href={props.IconLink1}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link1"
                  >
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="footer-icon"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </a>
                  <a
                    href={props.IconLink2}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link2"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="footer-icon2"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href={props.IconLink3}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link3"
                  >
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="footer-icon4"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-separator"></div>
        <span className="footer-text2">{props.Copyright}</span>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            display: flex;
            position: relative;
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
          .footer-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-logo {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-link {
            display: contents;
          }
          .footer-image {
            height: 4rem;
            text-decoration: none;
          }
          .footer-text {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .footer-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-container1 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-title1 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link1 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link2 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link3 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link4 {
            color: var(--dl-color-gray-white);
            text-decoration: none;
          }
          .footer-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-title2 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link21 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link22 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link23 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link24 {
            color: var(--dl-color-gray-white);
            text-decoration: none;
          }
          .footer-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-title3 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-email {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-phone {
            color: var(--dl-color-gray-white);
            text-decoration: none;
          }
          .footer-socials {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text1 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-link1 {
            display: contents;
          }
          .footer-icon {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link2 {
            display: contents;
          }
          .footer-icon2 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link3 {
            display: contents;
          }
          .footer-icon4 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          .footer-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .footer-text2 {
            color: var(--dl-color-gray-white);
            align-self: center;
          }

          @media (max-width: 991px) {
            .footer-footer {
              flex-direction: column;
            }
            .footer-container1 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .footer-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer-container {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-logo {
              align-items: center;
            }
            .footer-image {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-text {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .footer-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: column;
              justify-content: center;
            }
            .footer-container1 {
              width: 100%;
              align-items: center;
              margin-right: 0px;
              flex-direction: column;
              justify-content: center;
            }
            .footer-product-container {
              width: 100%;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .footer-title1 {
              width: 100%;
              text-align: center;
            }
            .footer-link1 {
              width: 100%;
              text-align: center;
            }
            .footer-link2 {
              width: 100%;
              text-align: center;
            }
            .footer-link3 {
              width: 100%;
              text-align: center;
            }
            .footer-link4 {
              width: 100%;
              text-align: center;
            }
            .footer-company-container {
              width: 100%;
              align-items: center;
              margin-bottom: var(--dl-space-space-twounits);
              justify-content: center;
            }
            .footer-container2 {
              width: 100%;
              align-items: center;
              justify-content: center;
            }
            .footer-contact {
              width: 100%;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              padding: var(--dl-space-space-unit);
            }
            .footer-container {
              align-items: center;
              flex-direction: column;
            }
            .footer-image {
              margin-bottom: 0px;
            }
            .footer-text {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .footer-links-container {
              align-items: center;
              flex-direction: column;
            }
            .footer-container1 {
              margin-right: 0px;
            }
            .footer-container2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              margin-bottom: 0px;
              justify-content: center;
            }
            .footer-contact {
              align-items: center;
              margin-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .footer-text2 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  LinkText3: 'Tutorials',
  LinkText2_3: 'Contact',
  IconLink3: '',
  rootClassName: '',
  IconLink1: '',
  EmailAdd: '',
  Title1: 'Product',
  FLogoAlt: 'logo',
  PhoneNo: '',
  FLogoImage: '',
  FLogoImageUrl: '/playground_assets/mastulogo2-1500h.webp',
  LinkURL4: '',
  LinkURL2: '',
  LinkURL1: '',
  Title3: 'Contact Us',
  LinkText1: 'Features',
  Description: 'Resort | Restaurant | Club ',
  Copyright: "© 2021 Mas'Tul, All Rights Reserved.",
  LinkURL5: '',
  LinkText4: 'Releases',
  LinkText2_2: 'Careers',
  LinkURL6: '',
  Email: 'hello@maya.resort',
  Phone: '+123 (4567) 890',
  LinkURL7: '',
  LinkText2: 'Pricing',
  IconLink2: '',
  LinkText2_4: 'Blog',
  LinkURL3: '',
  Title2: 'Company',
  Title4: 'Follow Us',
  LinkText2_1: 'About',
  LinkURL8: '',
}

Footer.propTypes = {
  LinkText3: PropTypes.string,
  LinkText2_3: PropTypes.string,
  IconLink3: PropTypes.string,
  rootClassName: PropTypes.string,
  IconLink1: PropTypes.string,
  EmailAdd: PropTypes.string,
  Title1: PropTypes.string,
  FLogoAlt: PropTypes.string,
  PhoneNo: PropTypes.string,
  FLogoImage: PropTypes.string,
  FLogoImageUrl: PropTypes.string,
  LinkURL4: PropTypes.string,
  LinkURL2: PropTypes.string,
  LinkURL1: PropTypes.string,
  Title3: PropTypes.string,
  LinkText1: PropTypes.string,
  Description: PropTypes.string,
  Copyright: PropTypes.string,
  LinkURL5: PropTypes.string,
  LinkText4: PropTypes.string,
  LinkText2_2: PropTypes.string,
  LinkURL6: PropTypes.string,
  Email: PropTypes.string,
  Phone: PropTypes.string,
  LinkURL7: PropTypes.string,
  LinkText2: PropTypes.string,
  IconLink2: PropTypes.string,
  LinkText2_4: PropTypes.string,
  LinkURL3: PropTypes.string,
  Title2: PropTypes.string,
  Title4: PropTypes.string,
  LinkText2_1: PropTypes.string,
  LinkURL8: PropTypes.string,
}

export default Footer
