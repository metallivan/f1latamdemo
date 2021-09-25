import React from "react";
import './AboutUs.css'

const AboutUs = () => {
    return (
        <section className="about-us">
            <img className="portait" src="https://www.hdcarwallpapers.com/walls/alpine_a521_2021_f1_car_4k_3-HD.jpg" alt="F1" />
            {/* <div className="title-bg-shadow">
            </div> */}
                <h1 className="about-title">Sobre Nosotros</h1>
            <p className="about-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque velit autem, commodi quisquam ut labore fugit? Veniam possimus voluptatum autem nulla necessitatibus aspernatur vel rerum reiciendis doloremque sed libero laboriosam consequatur ratione illum ad voluptates aperiam minima iste deleniti beatae facere nemo commodi, magni perferendis? Velit dolore alias ratione error? Somos tres pelotudos que se creen Schumacher y con cuea manejamos nuestras vidas uwu.</p>
        </section>
    );
};

export { AboutUs };