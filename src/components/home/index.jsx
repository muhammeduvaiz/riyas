import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './home.css';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";




gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const brandRef = useRef(null);
    const offerRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        // Hero Animation
        gsap.fromTo(heroRef.current.children,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
        );

        // About Section Animation
        gsap.fromTo(aboutRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 80%",
                }
            }
        );

        // Brand Section Animation
        gsap.fromTo(brandRef.current,
            { x: -50, opacity: 0 },
            {
                x: 0, opacity: 1, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: brandRef.current,
                    start: "top 80%",
                }
            }
        );

        // Offer Section Animation
        gsap.fromTo(offerRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out",
                scrollTrigger: {
                    trigger: offerRef.current,
                    start: "top 80%",
                }
            }
        );

        // Contact Section Animation
        gsap.fromTo(contactRef.current,
            { scale: 0.9, opacity: 0 },
            {
                scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 85%",
                }
            }
        );

    }, []);

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero" ref={heroRef} id="home">
                <div className="hero-image-container">
                    <img src="/riyas.png" alt="Riyaz - Founder" className="hero-image" />
                </div>
                <h1>RIYAZ</h1>
                <p>Founder of CARRTEL vintage</p>
                <p>Building a vintage brand that makes good style accessible and sustainable.</p>
            </section>

            {/* About Section */}
            <section id="about" ref={aboutRef}>
                <h2 className="section-title">Who I Am</h2>
                <div className="content-block">
                    <p>
                        Born on 04 October 1998 and raised in Kasaragod, Kerala, I’m passionate about building a vintage brand that makes good style accessible and sustainable.
                    </p>
                    <br />
                    <p>
                        CARRTEL was created with the idea that fashion doesn’t have to be new to feel fresh. Every piece is carefully sourced and curated to offer quality, comfort, and individuality. From everyday essentials to standout finds, the focus is always on value and authenticity.
                    </p>
                    <br />
                    <p>
                        I manage everything from sourcing and curation to branding and customer experience, constantly working to grow CARRTEL into a trusted name in the vintage community.
                    </p>
                    <br />
                    <p>
                        I completed my graduation at St. Aloysius College, Mangalore, and today I’m focused on expanding CARRTEL through online platforms, collaborations, and new ideas.
                    </p>
                </div>
            </section>

            {/* Brand Details Section */}
            <section id="brand" className="brand" ref={brandRef}>
                <h2 className="section-title">Brand Details</h2>
                <div className="brand-details">
                    <div className="detail-item">
                        <span className="detail-label">Store Name:</span>
                        <span>CARRTEL vintage</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Founder:</span>
                        <span>Riyaz</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Location:</span>
                        <span>Mangalore, Karnataka</span>
                    </div>
                </div>
            </section>

            {/* Offer Section */}
            <section id="offer" className="offer">
                <h2 className="section-title">What We Offer</h2>
                <div className="offer-list" ref={offerRef}>
                    <div className="offer-item">
                        <h3>Curated Thrift Clothing</h3>
                    </div>
                    <div className="offer-item">
                        <h3>Quality-checked Pre-loved Pieces</h3>
                    </div>
                    <div className="offer-item">
                        <h3>Sustainable Fashion Choices</h3>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-container" ref={contactRef}>
                <h2 className="section-title">Get In Touch</h2>
                <p className="content-block">
                    Interested in collaborations, bulk orders, or just want to say hello?<br />
                    I’d love to connect.
                </p>
                {/* <a href="mailto:r3yazz@gmail.com" className="contact-btn">Say Hello</a> */}
                <div>
                    <div className='icon'>
                        <a href="https://wa.me/918111911534" target='_blank' rel='noopener noreferrer'>
                            <FaWhatsapp title="WhatsApp" />
                        </a>
                        <a href="https://www.instagram.com/r1yazz/" target='_blank' rel='noopener noreferrer'>
                            <FaInstagram title="Instagram" />
                        </a>
                        <a href="mailto:r3yazz@gmail.com" target='_blank' rel='noopener noreferrer'>
                            <MdEmail title="Email" />
                        </a>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Riyaz – CARRTEL Thrift Store</p>
            </footer>
        </div>
    );
};

export default Home;