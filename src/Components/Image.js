import React from 'react';
import '../Styles/Image.css'

const Image = (props) => {
    return (
        <div className="img" style={{ backgroundImage: `url(${props.src})` }} />
    )
}

export default Image;