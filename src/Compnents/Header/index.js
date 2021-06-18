import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import MicIcon from "@material-ui/icons/Mic";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import logo from "../../assets/images/1.jpg";
import darklogo from "../../assets/images/2.png";
import { EssentialContext } from "../../contexts/EssentialContext";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { useTheme } from "@material-ui/core/styles";
import DropdownMenu from '../dropdownmenu/DropdownMenu';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const { setIsMenuOpen } = useContext(EssentialContext);
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.header}>
      <div className={classes.headerLeft}>
        <MenuIcon
          className={classes.headerIcons}
          onClick={() => setIsMenuOpen((oldValue) => !oldValue)}
        />
        <Link to="/">
          <img
            className={classes.headerLogo}
            src={theme.palette.type === "dark" ? darklogo : logo}
            alt=""
          />
        </Link>
      </div>

      <div className={classes.headerSearch}>
        <div className={classes.headerInput}>
          <input
            type="text"
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
          />
          <Link
            className={classes.headerInputLink}
            to={`/search/${inputSearch}`}
          >
            <SearchIcon className={classes.headerSearchbutton} />
          </Link>
        </div>
        <MicIcon className={classes.headerMi} />
      </div>

      <div className={classes.headerRight}>
        <ul className={classes.headerRightUl}>
          <li>
            <AppsIcon className={classes.headerIcon} />
          </li>
          <li>
            <MoreVertIcon className={classes.headerIcon}  onClick={() => setOpen(!open)} />
            {open && <DropdownMenu />}
          </li>
        </ul>
        <div className={classes.signin}>
          <AccountCircleIcon className={classes.signincolor} />{" "}
          <p className={classes.signinp}>SIGN IN</p>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(styles);

export default Header;
