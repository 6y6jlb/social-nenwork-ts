import React, {useCallback} from "react";
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
                                                         portionSize = 5,
                                                         currentPage,
                                                         onPageChanged,
                                                         portionNumber,
                                                         changePortionNumber,
                                                         color = COLORS.TRANSPARENT,
                                                     }) => {

    const pagesCount = Math.ceil ( totalCount / portionSize ); // pages:number
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    const getPages = useCallback ( () => {
        let tempPages: number[] = [];
        for (let i = 1; i < pagesCount + 1; i++) {
            tempPages = [...tempPages, i];
        }
        return tempPages;
    }, [pagesCount] );

    const pages = getPages ();

    const colorStyles = color == COLORS.PURPLE ? style.purple : color == COLORS.GREEN ? style.green : '';

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

    const left = portionNumber > 1 &&
        <span onClick={ () => changePortionNumber ( portionNumber - 1 ) }
                                            className={ style.normalNumber }>{ '<' }</span>;
    const right = pagesCount/portionSize > portionNumber &&
        <span onClick={ () => changePortionNumber ( portionNumber + 1 ) }
                                                      className={ style.normalNumber }>{ '>' }</span>;
    const bigRight = portionNumber + 23 <= pagesCount / portionSize &&
        <span onClick={ () => changePortionNumber ( portionNumber + 23 ) }
              className={ style.normalNumber }>{ '>>' }</span>;
    const bigLeft = portionNumber - 23 > 23 && <span onClick={ () => changePortionNumber ( portionNumber - 23 ) }
                                                     className={ style.normalNumber }>{ '<<' }</span>;
    const end = portionNumber + portionSize < pagesCount / portionSize &&
        <span onClick={ () => changePortionNumber ( pagesCount / portionSize ) }
              className={ style.normalNumber }>{ 'end' }</span>;
    const start = portionNumber - portionSize > 0 &&
        <span onClick={ () => changePortionNumber ( 1 ) }
                                                           className={ style.normalNumber }>{ 'start' }</span>;
    return (
        <>
            <div className={ `${ style.pages } ${ colorStyles }` }>
                { start }
                { bigLeft }
                { left }
                { mappedPages }
                { right }
                { bigRight }
                { end }
            </div>


        </>
    );
} );
export default Paginator;