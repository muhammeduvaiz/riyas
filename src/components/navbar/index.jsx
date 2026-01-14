import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './navbar.css';

const Navbar = () => {
    const navRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const el = navRef.current;

        // Initial fade in
        gsap.fromTo(el,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
        );

        const handleScroll = () => {
            if (window.scrollY > 50) {
                el.classList.add('scrolled');
            } else {
                el.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar" ref={navRef}>

            <a href="https://www.instagram.com/carrtel.vintage/" className="logo" target="_blank" rel="noopener noreferrer">
                <img src="carrtellogo.jpg" alt="logo" />
            </a>

            <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a></li>
                <li><a href="#brand" className="nav-link" onClick={() => setIsOpen(false)}>Brand</a></li>
                <li><a href="#offer" className="nav-link" onClick={() => setIsOpen(false)}>Offer</a></li>
                <li><a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
