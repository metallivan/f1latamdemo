import React from "react";
import { NewsBlock } from "./NewsBlock";
import './News.css'

const News = () => {
    return (
        <section className="news">
            <h1>Noticias</h1>
            <div className="news-container">
                <NewsBlock />
                <NewsBlock />
                <NewsBlock />
                <NewsBlock />
            </div>
        </section>
    );
};

export { News };