import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from './styles';

function SidebarRow({ Icon, title }) {

  const classes = useStyles();

  return (
    <div className={classes.sidebarrow}>
      <Icon className={classes.sidebarrowIcon} />
      <h2>{title}</h2>
    </div>
  );
}

const useStyles = makeStyles(styles);

export default SidebarRow;