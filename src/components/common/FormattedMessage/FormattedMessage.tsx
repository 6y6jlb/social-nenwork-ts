import * as React from 'react';
import data from '../../../variables/en.json'


type Props = {
    _id: string
};
export const FormattedMessage = (props:Props) => {
    const {_id} = props;

    const jsonObj = JSON.parse ( JSON.stringify ( data ) );

    return <span>{ jsonObj[_id] }</span>

    return (
        <span>
            { jsonObj[_id] }
        </span>
    );
};
