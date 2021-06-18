import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReplyIcon from '@material-ui/icons/Reply';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { Avatar } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from './styles';
import Likerow from '../likerow';

const VideoInfo = ({title, description, publishedDate, channelTitle, channelImage, viewCount, likeCount, dislikeCount, subs}) => {
    const classes = useStyles();
    return (
        <div className={classes.videoinfo}>
            <div className={classes.videoDetails}>
                <div className={classes.videoinfoHeadline}>
                    <h1>{title}</h1>
                </div>
                <div className={classes.videoinfoStats}>
                    <p>{viewCount} views • {publishedDate}</p>
                    <div className={classes.videoinfoLikes}>
                        <Likerow className={classes.sr} Icon={ThumbUpIcon} title={likeCount} />
                        <Likerow  Icon={ThumbDownIcon} title={dislikeCount} />
                        <Likerow  Icon={ReplyIcon} title='SHARE' />
                        <Likerow  Icon={PlaylistAddIcon} title='SAVE' />
                        <Likerow  Icon={MoreHorizIcon} title='' />
                    </div>
                </div>
            </div>

            <div className={classes.videoinfoChannel}>
                <div>
                    <Avatar className={classes.videoinfoAvatar}
                        alt={channelTitle} 
                        src={channelImage} 
                    />
                    <div className={classes.videoinfoChannelinfo}>
                        <h3 className={classes.videoinfoChanneltitle}>{channelTitle}</h3>
                        <p className={classes.videoinfoChannelsubs}>{subs} subscribers</p>
                    </div>
                    
                </div>
                <div className={classes.videoinfoSubscribe}>
                    <button className={classes.videoinfoSubscribebbut}>SUBSCRIBE</button>
                </div>
            </div>
            <div className={classes.videoinfoChanneldesc}>
                <p>{description}</p>
            </div>
        </div>
    )
};

const useStyles = makeStyles(styles);

export default VideoInfo;