import * as React from 'react';
import box from '../../../images/box.png';
import style from './NoData.module.css';


interface IProps {

}

export const NoData: React.FC<IProps> = ({children}) => {
    return (
        <div className={ style.noDataWrapper }>
            <img src={ box } alt="no data"/>
            {children && <div>{ children }</div> }
        </div>
    );
};