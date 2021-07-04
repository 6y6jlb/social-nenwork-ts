import React from 'react';
import {ArticleType} from "../../../../api/newsAPI";
import style from './Article.module.css'

type PropsType = {
    article: ArticleType | any
}

const Article: React.FC<PropsType> = ({article}) => {
    return (
        <div className={style.article}>
            <div className={style.img} style={{backgroundImage:`url(${article.urlToImage})`}}></div>
            <h1 className={style.title}>{ article.title }</h1>
            <p className={style.text}>{ article.content }</p>
        </div>
    );
};

export default Article;