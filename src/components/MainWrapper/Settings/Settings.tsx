import React from "react";
import NewsFeed from "../NewsFeed/NewsFeed";
import {Redirect} from "react-router-dom";
import {PATH} from "../../common/routes/Routes";


const Settings = React.memo(() => (
    <div>
        <Redirect to={PATH.ERROR_UNKNOWN_PAGE}/>
    </div>
));
export default Settings;