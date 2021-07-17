import {AppStateType} from "../../Redux/reduxStore";

export const portionNumberSelector = (state: AppStateType) => state.news.portionNumber
export const pageSizeSelector = (state: AppStateType) => state.news.pageSize
export const pageSelector = (state: AppStateType) => state.news.page
export const isFetchingSelector = (state: AppStateType) => state.news.isFetching
export const totalCountSelector = (state: AppStateType) => state.news.totalResults
export const articlesSelector = (state: AppStateType) => state.news.articles