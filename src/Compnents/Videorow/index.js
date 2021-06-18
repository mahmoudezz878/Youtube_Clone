import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from './styles';

function Videorow({
  image,
  title,
  channel,
  views,
  timestamp,
  description,
}) {

  const classes = useStyles();

  return (
    <div className={classes.videorow}>
      <img src={image} alt="" />
      <div className={classes.videorowText}>
        <h3>{title}</h3>
        <p className={classes.videorowHeadline}>
          {channel} .
          <span className={classes.videorowSubs}>
          </span>{" "}
          {views} views {timestamp}
        </p>
        <p className={classes.videorowDiscription}>{description}</p>
      </div>
    </div>
  );
}

const useStyles = makeStyles(styles);

export default Videorow;
