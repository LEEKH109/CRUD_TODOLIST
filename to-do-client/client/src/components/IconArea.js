import React from "react";
import mainId from '../static/data.js';

const IconArea = () =>{
    return(
        <div>
            <div className="iconArea">
                <img className="userIcon" src={mainId[0].usericon}/> 
            </div>
        </div>
    )
}

export default IconArea;