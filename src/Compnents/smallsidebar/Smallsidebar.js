import React, { useContext } from "react";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import SidebarRow from './../SidebarRow/index';
import { Link } from "react-router-dom";
import {EssentialContext} from '../../contexts/EssentialContext';
import { makeStyles } from "@material-ui/core/styles";
import styles from './styles';

function Smallsidebar() {
    const classes = useStyles();
    const { isMenuOpen } = useContext(EssentialContext);
    return (
        <div className={isMenuOpen ? classes.hidesmallsidebar : classes.smallsidebar}>
        <Link to="/" >
            <SidebarRow className={classes.row}  Icon={HomeIcon} title="Home" />
        </Link>
        <Link to="/" >
            <SidebarRow className={classes.row}  Icon={ExploreIcon} title="Explore" />
        </Link>
        <Link to="/" >
            <SidebarRow className={classes.row}  Icon={SubscriptionsIcon} title="Subscriptions" />
        </Link>
        <Link to="/" >
            <SidebarRow className={classes.row}  Icon={SubscriptionsIcon} title="Subscriptions" />
        </Link>
        <Link to="/" >
            <SidebarRow className={classes.row}  Icon={VideoLibraryIcon} title="Library" />
        </Link>
        <Link to="/" >
            <SidebarRow className={classes.row}  Icon={HistoryIcon} title="History" />
        </Link>

            
        </div>
    )
}

const useStyles = makeStyles(styles);

export default Smallsidebar

