/**@Library imports */
import React from 'react'
import { ModalFooter, Container } from 'react-bootstrap';

/**@Other imports */
import '../../../../assets/styles/main.scss';

function Footer() {
    return (

        <div className='footer-custom'>
            &copy; {new Date().getFullYear()} Copyright{' '}
            <a>
                Cartstore.com
            </a>
        </div>
    )
}

export default Footer;