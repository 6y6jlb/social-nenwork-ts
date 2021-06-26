import React from 'react';

type PropsType = {
    contactTitle: string
    contactValue:string|null
}

const Contact: React.FC<PropsType> = ({contactTitle, contactValue}) => {
    return (
        <li>
            <b>{ contactTitle }: </b> <span>{ contactValue || '' }</span>
        </li>
    );
};

export default Contact;