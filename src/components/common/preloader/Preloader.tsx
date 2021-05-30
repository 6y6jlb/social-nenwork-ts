import React from "react";
import style from "./Preloader.module.css";
import preloader from "../../../images/285 (1).gif";

type Props = {}

const Preloader: React.FC<Props> = React.memo((props) => {
    return <div className={ style.preloader }><img src={ preloader } alt="preloader"/></div>
})
export default Preloader;
