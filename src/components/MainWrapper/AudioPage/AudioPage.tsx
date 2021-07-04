import React from "react";
import {PATH} from "../../common/routes/Routes";
import {Redirect} from "react-router-dom";

const AudioPage = React.memo ( () => (
    <div>
        <Redirect to={ PATH.ERROR_UNKNOWN_PAGE }/>
    </div>
) );

export default AudioPage;