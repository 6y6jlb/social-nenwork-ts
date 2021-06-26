import React, {useState} from "react";
import style from "./Paginator.module.css";

type PropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}


const Paginator: React.FC<PropsType> = ({totalCount,pageSize,currentPage,onPageChanged}) => {
    const pagesCount = Math.ceil ( totalCount / pageSize ) // pages:number
    const [portionNumber, setPortionNumber] = useState ( 1 )
    const leftPortionPageNumber = (portionNumber - 1) * pageSize + 1
    const rightPortionPageNumber = portionNumber * pageSize

    let pages: number[] = [];
    for (let i = 1; i < pagesCount + 1; i++) {
        pages = [...pages, i]
    }

    const mappedPages = pages.filter(p=>p>=leftPortionPageNumber && p<=rightPortionPageNumber)
        .map ( (p, i) => <span key={ i } onClick={ () => onPageChanged ( p ) }
                               className={ currentPage === p ? style.activeNumber : style.normalNumber }>{ p }</span>
        )

    const left = portionNumber > 1 && <span onClick={() => setPortionNumber(portionNumber - 1)}
                                            className={style.activeNumber}>{'<<<'}</span>
    const right = pagesCount > portionNumber && <span onClick={() => setPortionNumber(portionNumber + 1)}
                                                      className={style.activeNumber}>{'>>>'}</span>
    return (
        <>
    <div className={style.pages}>
        {left}
        {mappedPages}
        {right}
    </div>


    </>
)
}
export default Paginator;