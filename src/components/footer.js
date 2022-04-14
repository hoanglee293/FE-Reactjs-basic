import React from 'react'
import { Button } from './navbar/button';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-sub'>
            <p className='footer-sub-heading'>
                Join the addEventListener newletter to receive our best vacation deals
            </p>
            <p className='footer-sub-text'>
                You can unsub at nay time.
            </p>
            <div className='input-areas'>
                <form>
                    <input 
                        type='email' name='email' placeholder='Your email' className='footer-input'
                    />
                    <Button BStyle='btn--outline'>
                        Subscribe
                    </Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimoial</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimoial</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimoial</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimoial</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRVL 
                        </Link>
                    </div>
                    <small className='website-rights'>TRVL & 2022</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='instagram'>
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='twitter'>
                            <i className='fab fa-twitter'></i>
                        </Link>
                        <Link className='social-icon-link linkedin' to='/' target='_blank' aria-label='linkedin'>
                            <i className='fab fa-linkedin'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Footer