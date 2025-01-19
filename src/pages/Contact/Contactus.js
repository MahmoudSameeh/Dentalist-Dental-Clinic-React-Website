import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Navbar from '../../components/Navbar/Navbar';
import './Contactus.scss';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../sections/Footer/Footer';

const Contactus = () => {
    return (
        <>
            <section className='section-bg section-common contact-section'>
                <Navbar />
                <SectionTitle 
                    title="Contact Us"
                    description="Ready to take the next step towards a healthier smile? Contact us today at Lumina Dental Studio. Our friendly team is here to answer your questions and schedule your appointment!"
                />
            </section>
            <section className='contact-form-area' data-aos="fade-up" data-aos-duration="2000">
                <ContactForm />
            </section>
            <Footer />
        </>
    );
};

export default Contactus;