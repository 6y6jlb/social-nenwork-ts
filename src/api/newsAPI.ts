import axios from "axios";

export type ArticleType = {
    source: {}
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}

type NewsGetResponseType = {
    status: string
    articles: ArticleType[]
    totalResults: number
}


const NEWS_API_KEY = '52abf77eab5d431cb79898102452aa6f';

export const NewsAPI = {
    getNews: (dateFull = new Date (), theme = 'russia') => {
        const date = `${ dateFull.getFullYear () }-${ dateFull.getMonth () }-${ dateFull.getDay () }`
        return axios.get<NewsGetResponseType> ( `https://newsapi.org/v2/everything?q=${ theme }&from=${ date }&sortBy=publishedAt&apiKey=${ NEWS_API_KEY }&language=en` )
    }
};