import {ActionsTypes} from "../Redux/reduxStore";
import {call, put, select, takeLatest} from "redux-saga/effects";
import {NEWS} from "../Redux/consts";
import {NewsAPI} from "../api/newsAPI";
import {actionsNews} from "../Redux/news-reducer";
import {newsPageSelector, newsPageSizeSelector} from "../utils/selectors/news-selectors";


export function* getNewsSagaWorker({type, payload}: { type: ActionsTypes, payload: { theme: string } }) {
    const pageSize = yield select(newsPageSizeSelector)
    const page = yield select(newsPageSelector)

    yield put(actionsNews.setIsFetching(true))
    try {
        const response = yield call(NewsAPI.getNews, new Date(), payload.theme, pageSize, page)
        const {totalResults, articles} = response.data
        yield put(actionsNews.setNews(articles, totalResults))

    } catch (e) {
        console.log(e)
    } finally {
        yield put(actionsNews.setIsFetching(false))
    }
}

export function* getNewsSagaWatcher() {
    yield takeLatest(NEWS.GET_NEWS_SAGA, getNewsSagaWorker)
}