import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Video from "../../Compnents/Video";
import Videoside from '../../Compnents/videoside'
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Videoinfo from "../../Compnents/Videoinfo";
import { makeStyles } from "@material-ui/core/styles";
import styles from './styles';

const Videoplayer = () => {
  const classes = useStyles();
  const api = "AIzaSyBlN1oK7nXNg5xA0LXw2vtnOd4QvSCMbSo";
  
  const [videoInfo, setVideoInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  let { videoId } = useParams();

  useEffect(() => {
    setVideoInfo([]);
    setIsLoading(true);
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${videoId}&key=${api}`
      )
      .then((response) => {
        createVideoInfo(response.data["items"][0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [videoId]);

  async function createVideoInfo(video) {
    
    const snippet = video.snippet;
    const stats = video.statistics;
    const channelId = snippet.channelId;
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics&id=${channelId}&key=${api}`
    );

    const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
    const subs = response.data.items[0].statistics.subscriberCount;
    const publishedDate = new Date(snippet.publishedAt).toLocaleDateString(
      "en-GB",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
    const title = snippet.title;
    const description = snippet.description;
    const channelTitle = snippet.channelTitle;
    const viewCount = stats.viewCount;
    const likeCount = stats.likeCount;
    const dislikeCount = stats.dislikeCount;

    setVideoInfo({
      title,
      description,
      publishedDate,
      channelTitle,
      channelImage,
      viewCount,
      likeCount,
      dislikeCount,
      subs,
    });

    setIsLoading(false);
  }

  if (isError) {
    return <div className="loading">No Results found!</div>;
  }

  return (
      <div className={classes.videoplayer}>
        <div className={classes.videoplayerVideodetails}>
          <div className={classes.videoplayerVideo}>
            {isLoading ? (
              <CircularProgress className="loading" color="secondary" />
            ) : (
              <Video videoId={videoId} />
            )}
          </div>
          <div>
            {!isLoading ? (
              <Videoinfo
                title={videoInfo.title}
                description={videoInfo.description}
                publishedDate={videoInfo.publishedDate}
                channelTitle={videoInfo.channelTitle}
                channelImage={videoInfo.channelImage}
                viewCount={videoInfo.viewCount}
                likeCount={videoInfo.likeCount}
                dislikeCount={videoInfo.dislikeCount}
                subs={videoInfo.subs}
              />
            ) : null}
          </div>
        </div>
          <Videoside />
      </div>
  );
};

const useStyles = makeStyles(styles);

export default Videoplayer;
