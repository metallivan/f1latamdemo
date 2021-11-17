import React from "react";
import { NewsBlock } from "./NewsBlock";
import './News.css';
import { NewsInfo } from './NewsInfo'

const News = () => {
    return (
        <section className="news">
            <h1>Noticias</h1>
            <div className="news-container">
                {
                    NewsInfo.map( news => 
                        <NewsBlock 
                            key={news.id}
                            id={news.id}
                            title={news.title}
                            text={news.text}
                            image={news.image}
                        />
                    )
                }
           
            </div>
        </section>
    );
};

export { News };