import React from 'react'
import logo from '../assets/image/logo2.png'

import { FaInstagram } from 'react-icons/fa'
import { MdFacebook } from 'react-icons/md'
import { SiTwitter } from 'react-icons/si'

const Footer = () => {
  const categories = [
    'Animation',
    'Architecture',
    'Graphic Design',
    'Illustration',
    'Interactive Design',
    'Miscellaneous',
    'Photography',
    'Product Design',
  ]

  const information = ['about', 'contact', 'terms']

  const template = ['Image License Info', 'Powered by Webflow']

  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-copy-link'>
          <img src={logo} alt='' />
          <p className='footer-copy-link-desc'>© 2018 Noiceland™, all rights reserved</p>
        </div>

        {/* categories */}
        <div className='footer-categories'>
          <h4 className='categories-title'>Categories</h4>
          <div className='footer-categories-grid'>
            {categories.map((el) => (
              <>
                <a href='/' className=' footer-categories-link'>
                  {el}
                </a>
              </>
            ))}
          </div>

          <form className='subscribe-form'>
            <h4 className='subscribe-form-title'>Subscribe to newsletter</h4>
            <div className='form-btns'>
              <input type='email' name='email' id='' placeholder='email address' />
              <button type='submit'>send</button>
            </div>
          </form>
        </div>

        <div className='footer-actions-grid'>
          <div className='footer-info'>
            <h4 className='categories-title title'>Information</h4>
            <div className='information column'>
              {information.map((el) => (
                <a href='/' style={{ color: 'white', marginBottom: '12px' }}>
                  {el}
                </a>
              ))}
            </div>
          </div>
          <div className='footer-follow'>
            <h4 className='categories-title title'>follow us</h4>
            <div className='actions column'>
              <FaInstagram size={24} style={{ marginBottom: '8px' }} />
              <MdFacebook size={24} style={{ marginBottom: '8px' }} />
              <SiTwitter size={24} style={{ marginBottom: '8px' }} />
            </div>
          </div>
          <div className='footer-template'>
            <h4 className='categories-title title'>template</h4>
            <div className='template column'>
              {template.map((el) => (
                <a href='/' style={{ color: 'white', marginBottom: '12px' }}>
                  {el}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
