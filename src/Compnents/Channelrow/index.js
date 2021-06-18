import React from "react";
import Avatar from "@material-ui/core/avatar";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
const Channelrow = ({
  image,
  channel,
  verified,
  subs,
  noOfvideos,
  description,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.channelrow}>
      <Avatar className={classes.channelrowLogo} alt={channel} src={image} />
      <div className={classes.channelrowText}>
        <h4 className={classes.channelrowTextH4}>
          {channel} {verified && <CheckCircleOutlineIcon />}{" "}
        </h4>
        <p className={classes.channelrowTextP}>
          {subs} subscribition . {noOfvideos} videos
        </p>
        <p className={classes.channelrowTextP}>{description}</p>
      </div>
    </div>
  );
};

const useStyles = makeStyles(styles);

export default Channelrow;
