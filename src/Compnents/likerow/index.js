import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from './styles';

function Likerow({ Icon, title }) {

  const classes = useStyles();

  return (
    <div className={classes.likerow}>
      <Icon className={classes.likerowIcon} />
      <h2>{title}</h2>
    </div>
  );
}

const useStyles = makeStyles(styles);

export default Likerow;