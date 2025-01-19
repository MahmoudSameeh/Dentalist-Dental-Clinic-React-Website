import React from 'react';
import './Safety.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Safety = () => {
    return (
        <section className='safty-section pt-100 section-bg section-common pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Safety"
                    title="We put the safety first"
                    description="At Lumina Dental Studio, we prioritize your safety above all else. With advanced sterilization procedures and a caring team, we ensure a safe, comfortable environment for every patient, every visit."
                />

                <div className="safety-video ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/f4jG8BCl5s0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Safety;