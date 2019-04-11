import React from 'react';
import svgIcon from "../reload.svg";
import "../Styles/Reload.css"

const Reload = (props) => {
    return (
        <img src={svgIcon} className="reload" alt="logo" onClick={props.imageClick} />
    )
}

export default Reload


