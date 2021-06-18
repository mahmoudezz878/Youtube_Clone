import React, { useContext } from "react";
import SidebarRow from "../SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import { EssentialContext } from "../../contexts/EssentialContext";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";

function Sidebar() {
  const classes = useStyles();
  const { isMenuOpen } = useContext(EssentialContext);
  return (
    <div className={isMenuOpen ? classes.sidebare : classes.hidesidebar}>
      <Link to="/">
        <SidebarRow selected Icon={HomeIcon} title="Home" />
      </Link>
      <Link to="/trending/trending">
        <SidebarRow Icon={WhatshotIcon} title="Trending" />
      </Link>
      <Link to="/trending/subscription">
        <SidebarRow Icon={SubscriptionsIcon} title="subscription" />
      </Link>
      <hr />
      <Link to="/trending/Library">
        <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      </Link>
      <Link to="/trending/History">
        <SidebarRow Icon={HistoryIcon} title="History" />
      </Link>
      <Link to="/trending/Yourvideos">
        <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
      </Link>
      <Link to="/trending/WatchLater">
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      </Link>
      <Link to="/trending/Likevideos">
        <SidebarRow Icon={ThumbUpAltIcon} title="Like videos" />
      </Link>
      <SidebarRow Icon={ExpandMoreIcon} title="Show more" />
      <hr />
    </div>
  );
}

const useStyles = makeStyles(styles);

export default Sidebar;
