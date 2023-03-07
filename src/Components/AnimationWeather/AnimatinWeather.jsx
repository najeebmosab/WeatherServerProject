import React, { useEffect, useState } from 'react';
import ReactAnimatedWeather from 'react-animated-weather';


function Animation(props) {
    const [icons, setIcons] = useState(props.icon);
    useEffect(() => {
        setIcons(props.icon);
       

    }, [props.icon])
    const weather = {
        "hail": "SNOW",
        "rain":"RAIN",
        "storm": "SLEET"
        ,
        "flood": "WIND"
        ,
        "fog": "FOG"
        ,
        "wind": "WIND"
        ,
        "clear_day": "CLEAR_DAY"
    }
    const defaults = {
        icon:weather[icons],
        color: 'goldenrod',
        size: 50,
        animate: true
    };

    return (<><ReactAnimatedWeather
        icon={defaults.icon}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
    /></>)
}


export default Animation;