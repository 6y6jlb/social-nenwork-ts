import {InferActionsType} from "./reduxStore";
import React from "react";
import {ArticleType} from "../api/newsAPI";
import {NEWS} from "./consts";


//types
export type InitialStateFromAppType = {
    articles: ArticleType[]
    totalResults: number
    isFetching: boolean
    portionNumber: number
    pageSize: number
    page: number
}

export type AppActionsTypes = InferActionsType<typeof actionsNews>
//ac
export const actionsNews = {
    getNewsSaga:(theme:string)=>{
        return {type:NEWS.GET_NEWS_SAGA,payload:{theme}}
    },
    setNews: (articles: ArticleType[], totalResults: number) => {
        return {type: NEWS.SET_NEWS, payload: {articles, totalResults}} as const
    },
    setIsFetching: (isFetching: boolean) => {
        return {type: NEWS.SET_IS_FETCHING, payload: {isFetching}} as const
    },
    setPage: (page: number) => {
        return {type: NEWS.SET_PAGE, payload: {page}} as const
    },
    setPageSize: (pageSize: number) => {
        return {type: NEWS.SET_PAGE_SIZE, payload: {pageSize}} as const
    },
    setPortionNumber: (portionNumber: number) => {
        return {type: NEWS.SET_PORTION_NUMBER, payload: {portionNumber}} as const
    }
}
//tc
/*export const getNews = (theme: string): AppThunk => async (dispatch, getState) => {
    const pageSize = getState ().news.pageSize
    const page = getState ().news.page

    dispatch ( actionsNews.setIsFetching ( true ) )
    try {
        const response = await NewsAPI.getNews ( new Date (), theme, pageSize, page )
        const {totalResults, articles} = response.data
        dispatch ( actionsNews.setNews ( articles, totalResults ) )

    } catch (e) {
        console.log ( e )
    } finally {
        dispatch ( actionsNews.setIsFetching ( false ) )
    }


}*/

//state
const initialState: InitialStateFromAppType = {
    articles: [],
    totalResults: 0,
    isFetching: false,
    page: 1,
    pageSize: 10,
    portionNumber: 1
}
//reducer
const newsReducer = (state = initialState, action: AppActionsTypes): InitialStateFromAppType => {
    switch (action.type) {
        case NEWS.SET_NEWS:
        case NEWS.SET_IS_FETCHING:
        case NEWS.SET_PAGE:
        case NEWS.SET_PAGE_SIZE:
        case NEWS.SET_PORTION_NUMBER:
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
}
//export default
export default newsReducer;
