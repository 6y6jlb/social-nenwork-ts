import React from "react";
import s from './Footer.module.css'
import {FormattedMessage} from "../common/FormattedMessage/FormattedMessage";

export const Footer = React.memo(() => (
    <footer className={ s.footer }>
        <FormattedMessage _id={'footer.text'}/>
    </footer>
));