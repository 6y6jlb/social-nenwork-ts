import React from "react";
import Article from "./Article/Article";
import style from './NewsFeed.module.css'
import Paginator from "../../common/Paginator/Paginator";
import {ArticleType} from "../../../api/newsAPI";
import Preloader from "../../common/preloader/Preloader";
import SearchArea from "./SearchArea/SearchArea";

type PropsType = {
    totalCount: number
    portionNumber: number
    currentPage: number
    articles: ArticleType[]
    onPageChange: (page: number) => void
    onSearchArea: (text: string) => void
    onPortionNumberChange: (portionNumber: number) => void


}

const NewsFeed: React.FC<PropsType> = React.memo ( ({
                                                        onSearchArea,
                                                        onPortionNumberChange,
                                                        portionNumber,
                                                        currentPage,
                                                        onPageChange,
                                                        totalCount,
                                                        articles
                                                    }) => {


    const mappedArticles = articles.map ( article => {
            return <Article key={ article.publishedAt } article={ article }/>
        } )

    return (
        <div className={ style.newsFeed }>
            <Paginator totalCount={ totalCount } currentPage={ currentPage } portionNumber={ portionNumber }
                       onPageChanged={ onPageChange } changePortionNumber={ onPortionNumberChange }/>
            <SearchArea onSearchArea={ onSearchArea }/>
            {totalCount?
            <div className={ style.articles }>
                {mappedArticles}
            </div>
                : <Preloader/>}
        </div>
    )

} );
export default NewsFeed;