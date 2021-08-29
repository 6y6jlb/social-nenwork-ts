import * as React from 'react';
import box from '../../../images/box.png';
import box1 from '../../../images/empty-box.png';
import style from './NoData.module.css';


interface IProps {
    emptyBox?: 1 | 2;
}

export const NoData: React.FC<IProps> = ({children, emptyBox = 1}) => {
    return (
        <div className={ style.noDataWrapper }>
            <img src={ emptyBox === 1 ? box : box1 } alt="no data"/>
            { children && <div>{ children }</div> }
        </div>
    );
};