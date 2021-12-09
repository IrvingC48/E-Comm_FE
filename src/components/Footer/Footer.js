import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

const Footer = () => {
    return (
        <>
            <footer className="footer is-primary">
                <div className="footer-brand">
                    <h1 className="footer-brand-title">The Shoe House</h1>
                    <span className="footer-brand-item">
                        Phone
                        55-79210144
                    </span>
                </div>
                <div className="footer-container">
                    <div className="footer-menu">
                        <div className="footer-links">
                            <span className="footer-links-title">Acount</span>
                            <Link className="footer-links-item" to="/my_profile">My Profile</Link>
                            <Link className="footer-links-item" to="/favorites">My Favorites</Link>
                            <Link className="footer-links-item" to="/cart">Shopping Cart</Link>
                        </div>
                        <div className="footer-links">
                            <span className="footer-links-title">Pages  </span>
                            <Link className="footer-links-item" to="/about_us">About Us</Link>
                            <Link className="footer-links-item" to="/contact_us">Contact Us</Link>
                            <Link className="footer-links-item" to="/blog">Blog</Link>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="foo-level is-primary">
                © 2021 The shoe house Inc. | Está página fue diseñada con fines didácticos.
            </div>
        </>
    )
};

export default Footer
