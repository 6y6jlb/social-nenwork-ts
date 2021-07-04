import {AppThunk, InferActionsType} from "./reduxStore";
import React from "react";
import {ArticleType, NewsAPI} from "../api/newsAPI";


//types
export type InitialStateFromAppType = {
    articles: ArticleType[]
    totalResults: number
}

export type AppActionsTypes = InferActionsType<typeof actionsNews>
//ac
export const actionsNews = {
    setNews: (articles: ArticleType[], totalResults: number) => {
        return {type: 'SET_NEWS', payload: {articles, totalResults}} as const
    }
}
//tc
export const getNews = (): AppThunk => async dispatch => {
    try {
        const response = await NewsAPI.getNews ()
        const {totalResults,articles} = response.data
        dispatch(actionsNews.setNews(articles,totalResults))

    } catch (e) {
        console.log ( e )
    }


}

//state
const initialState: InitialStateFromAppType = {
    articles: [],
    totalResults: 0
}
//reducer
const newsReducer = (state = initialState, action: AppActionsTypes): InitialStateFromAppType => {
    switch (action.type) {
        case 'SET_NEWS':
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
}
//export default
export default newsReducer;
