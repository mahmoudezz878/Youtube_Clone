import React, { useState, useContext } from "react";
import "./style.css";
import { CSSTransition } from "react-transition-group";
import { EssentialContext } from "../../contexts/EssentialContext";
import AppsIcon from "@material-ui/icons/Apps";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import TranslateIcon from '@material-ui/icons/Translate';
import LanguageIcon from '@material-ui/icons/Language';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from "@material-ui/core/styles";
import styles from './styles';

function DropdownMenu() {
    const classes = useStyles();
    const [activeMenu, setActiveMenu] = useState("main");
    const { setDarkmode } = useContext(EssentialContext);
  
    function DropdownItem(props) {
      return (
        <a
          href="#"
          className={classes.menuItem}
          onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        >
          <span className={classes.iconButton}>{props.leftIcon}</span>
          {props.children}
          <span className={classes.iconRight}>{props.righttIcon}</span>
        </a>
      );
    }
  
    return (
      <div className={classes.dropdown}>
        <CSSTransition 
          in={activeMenu === "main"}
          unmountOnExit
          timeout={500}
          classNames="menu-primary"
        >
          <div className={classes.menu} >
          <DropdownItem leftIcon={<Brightness4Icon />} righttIcon={<ArrowForwardIosIcon />} goToMenu="settings">
            <p>Appearance: Device theme</p>
            </DropdownItem>
            <DropdownItem leftIcon={<TranslateIcon />} righttIcon={<ArrowForwardIosIcon />} >
            <p>Language: English</p>
            </DropdownItem>
            <DropdownItem leftIcon={<LanguageIcon />} righttIcon={<ArrowForwardIosIcon />} >
            <p>Location: Egypt</p>
            </DropdownItem>
            <DropdownItem leftIcon={<SettingsIcon />}>Settings</DropdownItem>
          </div>
        </CSSTransition>
  
        <CSSTransition 
          in={activeMenu === "settings"}
          unmountOnExit
          timeout={500}
          classNames="menu-secondary"
        >
          <div className={classes.menu}>
            <DropdownItem leftIcon={<ArrowBackIcon />} goToMenu="main">Appearance</DropdownItem>
            <DropdownItem><p onClick={() => setDarkmode(true)}>Dark theme</p></DropdownItem>
            <DropdownItem><p onClick={() => setDarkmode(false)}>Light theme</p></DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }

  const useStyles = makeStyles(styles);

  export default DropdownMenu;