import React, { useEffect, useState } from "react";
import Sidevideocard from "../sidevideocard";
import axios from "axios";
import { DateTime } from "luxon";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Videoside = ({ name }) => {
  let { videoId } = useParams();
  const [videoCards, setVideoCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const classes = useStyles();

  const api = "AIzaSyBlN1oK7nXNg5xA0LXw2vtnOd4QvSCMbSo";

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=18&regionCode=eg&key=${api}`
      )
      .then((response) => {
        createVideoCards(response.data.items);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, []);

  async function createVideoCards(videoItems) {
    let newVideoCards = [];

    for (const video of videoItems) {
      const videoId = video.id;
      const snippet = video.snippet;
      const channelId = snippet.channelId;

      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${api}`
      );

      const channelImage = response.data.items[0].snippet.thumbnails.medium.url;

      const title = snippet.title;

      const image = snippet.thumbnails.medium.url;

      const views = video.statistics.viewCount;

      const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();

      const channel = snippet.channelTitle;

      newVideoCards.push({
        videoId,
        image,
        title,
        channel,
        views,
        timestamp,
        channelImage,
      });
    }

    setVideoCards(newVideoCards);
    setIsLoading(false);
  }

  if (isError) {
    return <div className="loading">No Results found!</div>;
  }

  return (
    <div className={classes.videoside}>
      {isLoading ? (
        <CircularProgress className={classes.loading} color="secondary" />
      ) : null}
      
        {videoCards.map((item) => {
          return (
            <Link
              className={classes.recommendedvideosLink}
              key={item.videoId}
              to={`/video/${item.videoId}`}
            >
              <Sidevideocard
                title={item.title}
                image={item.image}
                views={item.views}
                timestamp={item.timestamp}
                channel={item.channel}
                channelimage={item.channelImage}
              />
            </Link>
          );
        })}

    </div>
  );
};

const useStyles = makeStyles(styles);

export default Videoside;
