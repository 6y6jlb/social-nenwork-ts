import React from "react";
import style from "./Paginator.module.css";
import {COLORS} from "./consts";







type PropsType = {
    totalCount: number
    currentPage: number
    portionSize?: number
    portionNumber: number
    onPageChanged: (pageNumber: number) => void
    changePortionNumber: (portion: number) => void
    color?: typeof COLORS

}


const Paginator: React.FC<PropsType> = React.memo ( ({
                                                         totalCount,
                                                         portionSize = 10,
                                                         currentPage,
                                                         onPageChanged,
                                                         portionNumber,
                                                         changePortionNumber,
                                                         color = COLORS.TRANSPARENT,
                                                     }) => {

    const pagesCount = Math.ceil ( totalCount / portionSize ); // pages:number
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    let pages: number[] = [];
    for (let i = 1; i < pagesCount + 1; i++) {
        pages = [...pages, i];
    }
const colorStyles = color == COLORS.PURPLE? style.purple :  color == COLORS.GREEN? style.green : ''

    const filteredPages = pages.filter ( p => p >= leftPortionPageNumber && p <= rightPortionPageNumber );
    const mappedPages = filteredPages.map ( (p, i) => {
        return (
            currentPage === p
                ? <span key={ i }
                        className={ style.activeNumber }>{ p }</span>
                : <span key={ i }
                        onClick={ () => {
                            onPageChanged ( p );
                        } }
                        className={ style.normalNumber }>{ p }</span>
        );
    } );

    const left = portionNumber > 1 && <span onClick={ () => changePortionNumber ( portionNumber - 1 ) }
                                            className={ style.normalNumber }>{ '<<<' }</span>;
    const right = pagesCount > portionNumber && <span onClick={ () => changePortionNumber ( portionNumber + 1 ) }
                                                      className={ style.normalNumber }>{ '>>>' }</span>;
    return (
        <>
            <div className={ `${ style.pages } ${ colorStyles }` }>
                { left }
                { mappedPages }
                { right }
            </div>


        </>
    );
} );
export default Paginator;