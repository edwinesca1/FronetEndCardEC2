import React from 'react';
import PropTypes from "prop-types";

import "./Card.css"

export const Card: React.FC<any> = ({lang, img, fcolor, scolor}) => {

    console.log(PropTypes);
    return (
        <div className="CardStyle" style={{
            background: `linear-gradient(to left, ${fcolor}, ${scolor})`
        }}>
            <img src={img} alt="lang.svg"/>
            <h3>{lang}</h3>
        </div>
    )
}

Card.propTypes = {
    lang: PropTypes.string,
    img: PropTypes.string,
    fcolor: PropTypes.string,
    scolor: PropTypes.string
}

export default Card
