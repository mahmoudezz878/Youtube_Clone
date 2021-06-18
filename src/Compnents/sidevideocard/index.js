import React, { useContext } from "react";
import { Avatar } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from './styles';

function Sidevideocard({image, title, channel, views, timestamp, channelimage}) {

    const classes = useStyles();

    return (
        <div className={classes.sidevideocard}>
            <img className={classes.videocardThumnail} src={image} alt="" />
            <div className={classes.videocardInfo}>
                <div className={classes.videocardText}>
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} . {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles(styles);

export default Sidevideocard;
