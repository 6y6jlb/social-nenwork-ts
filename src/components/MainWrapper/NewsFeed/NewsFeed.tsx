import React from "react";
import Article from "./Article/Article";
import style from './NewsFeed.module.css'
import SearchNewsForm from "./SearchNews/SearchNewsForm";
import Paginator from "../../common/Paginator/Paginator";
import {ArticleType} from "../../../api/newsAPI";

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

    return (
        <div className={ style.newsFeed }>
            <Paginator totalCount={ totalCount } currentPage={ currentPage } portionNumber={ portionNumber }
                       onPageChanged={ onPageChange } changePortionNumber={ onPortionNumberChange }/>
            <SearchNewsForm onSearchArea={ onSearchArea }/>
            <div className={ style.articles }>
                { articles.map ( article => {
                    return <Article key={ article.publishedAt } article={ article }/>
                } ) }
            </div>
        </div>
    )

} );
export default NewsFeed;