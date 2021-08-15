import {AppStateType} from "../../Redux/reduxStore";

export const newsPortionNumberSelector = (state: AppStateType) => state.news.portionNumber
export const newsPageSizeSelector = (state: AppStateType) => state.news.pageSize
export const newsPageSelector = (state: AppStateType) => state.news.page
export const newsIsFetchingSelector = (state: AppStateType) => state.news.isFetching
export const newsTotalCountSelector = (state: AppStateType) => state.news.totalResults
export const newsArticlesSelector = (state: AppStateType) => state.news.articles