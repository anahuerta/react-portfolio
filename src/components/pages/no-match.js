import React from "react";
import {Link} from "react-router-dom";

export default function(){
    return(
        <div>
            <h2>Page don't found</h2>
            <Link to ="/">Return to Homepage</Link>
        </div>
    );
}