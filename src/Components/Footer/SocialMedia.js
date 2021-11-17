import React from "react";
import youtubeIcon from '../../Images/yt.png';
import discordIcon from '../../Images/discord.png';
import instagramIcon from '../../Images/instagram.jpg';
import tiktokIcon from '../../Images/tiktok.png';
import { BrowserRouter, Link } from "react-router-dom";

const sm_items = [
    {
        "name" : "Youtube",
        "image" : youtubeIcon,
        "url" : "https://www.youtube.com/f1latamdemo",
    },
    {
        "name" : "Discord",
        "image" : discordIcon,
        "url" : "https://www.discord.com/f1latamdemo",
    },
    {
        "name" : "Instagram",
        "image" : instagramIcon,
        "url" : "https://www.instagram.com/f1latamdemo",
    },
    {
        "name" : "TikTok",
        "image" : tiktokIcon,
        "url" : "https://www.tiktok.com/f1latamdemo",
    },
];

const SocialMedia = () => {
    return (
        <section className="social-media">
            <h4>Nuestras redes sociales</h4>
            <hr />
            <BrowserRouter>
            <ul>
                { 
                    sm_items.map( item => 
                        <li key={item.name} >
                            <img className="img-icon" src={item.image} alt={item.name} />
                            <Link to={item.url}>{item.name}</Link>
                        </li> 
                    ) }
            </ul>
            </BrowserRouter>
            <hr />
            <p className="copyright">
                Copyright &#169; Paddockers 2021
            </p>
        </section>
    );
};

export { SocialMedia };