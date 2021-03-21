import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            {/* <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Title of footer
                </p>
                <p className='footer-subscription-text'>
                    Text of footer
                </p>
                <div className='input-areas'>
                    <form>
                       <input type='email' name='email' placeholder='Your Email' className='footer-input'></input> 
                       <Button buttonStyle='btn-outline'>
                           Say hi!
                       </Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About</h2>
                        <Link to='/contact'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/about'>More Stuff</Link>
                    </div>
                </div>
            </div> */}
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Daniel Reza
                        </Link>
                    </div>
                    <small className='website-rights'>Made by me.</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link github'
                        to='https://github.com/danielrezz'
                        target='_blank'
                        aria-label='Github'
                        >
                            <i className='fab fa-github'></i>
                        </Link>
                        <Link className='social-icon-link instagram'
                        to='https://www.instagram.com/daniel_rezz/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link linkedin'
                        to='https://www.linkedin.com/in/daniel-reza-974b53a2/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
