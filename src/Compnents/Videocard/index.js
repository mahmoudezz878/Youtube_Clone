import React, { useContext } from "react";
import { Avatar } from '@material-ui/core';
import {EssentialContext} from '../../contexts/EssentialContext';
import './styles.css';

function Videocard({image, title, channel, views, timestamp, channelimage}) {
    const { isMenuOpen } = useContext(EssentialContext);
    return (
        <div className={ isMenuOpen ? "videocard" : "videocard smallvideocard" }>
            <img className="videocard__thumnail" src={image} alt="" />
            <div className="videocard__info">
                <Avatar className="videocard__avatar" alt={channel} src={channelimage} />
                <div className="videocard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} . {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default Videocard
