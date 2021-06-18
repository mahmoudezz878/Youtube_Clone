import React, {useEffect, useState} from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import Channelrow from '../Channelrow';
import Videorow from '../Videorow';
import axios from 'axios';
import {useParams} from 'react-router';
import {DateTime} from 'luxon';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styles from './styles';


const Search = () => {

  const [channelRow, setChannelRow] = useState('');
  const [videoRows, setVideoRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const classes = useStyle();

    let { searchQuery } = useParams();
    let {videoId} = useParams();
    const api = "AIzaSyBlN1oK7nXNg5xA0LXw2vtnOd4QvSCMbSo"

    useEffect(() => {
      setChannelRow('');
      setVideoRows([]);
        axios
          .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=channel&q=${searchQuery}&safeSearch=none&key=${api}`)
          .then(response => {
            createChannelRow(response.data['items'][0]);
           
          })
        axios
          .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&type=video&q=${searchQuery}&safeSearch=none&key=${api}`)
          .then(response => {
            createVideoRows(response.data['items']);
            setIsError(false);
          })
          .catch(error => {
            console.log(error);
            setIsError(true);
            setIsLoading(false);
          })
      
      }, [searchQuery])

      async function createChannelRow (channel) {
          const channelId = channel.id.channelId;
          const response = await axios
          .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${api}`)
          const noOfVideos = response.data.items[0].statistics.videoCount;
          const subs = response.data.items[0].statistics.subscriberCount;
          const snippet = channel.snippet
          const title = snippet.title;
          const description = snippet.description;
          const image = snippet.thumbnails.medium.url;

          setChannelRow({
            channelId,
            image,
            title,
            subs,
            noOfVideos,
            description
          })

      }

      async function createVideoRows (videos) {
        let newVideoRows = [];
        for (const video of videos) {
          const videoId = video.id.videoId
          const response = await axios
          .get(`https://www.googleapis.com/youtube/v3/videos?part=statistics%2C%20snippet&id=${videoId}&key=${api}`)
          const views = response.data.items[0].statistics.viewCount;
          const snippet = video.snippet;
          const title = snippet.title;
          const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
          const channel = snippet.channelTitle;
          const description = snippet.description;
          const image = snippet.thumbnails.medium.url;
          newVideoRows.push({
            videoId,
            title,
            image,
            views,
            timestamp,
            channel, 
            description
          })
        }

        setVideoRows(newVideoRows);
        setIsLoading(false);

      }

      if (isError) {
        return <div className='loading'>No Results found!</div>
      }

    return (
        <div className={classes.searchpage}>
            <div className={classes.searchpageFilter}>
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            { isLoading ? <CircularProgress className='loading' color='secondary' /> : null }
            <hr />

            {!isLoading ? <Channelrow key={channelRow.channelId}
                image={channelRow.image}
                channel={channelRow.title}
                subs={channelRow.subs}
                noOfvideos={channelRow.noOfVideos}
                noOfVideos={channelRow.noOfVideos}
                description={channelRow.description}
            /> : null}

            <hr />
          {
                videoRows.map(item => {
                  return(
                    <Link key={item.videoId} to={`/video/${item.videoId}`}>
                      <Videorow
                        title={item.title}
                        image={item.image}
                        views={item.views}
                        timestamp={item.timestamp}
                        channel={item.channel}
                        description={item.description}
                      />
                    </Link>
                  )
                })
          }

        </div>
    )
}

const useStyle = makeStyles(styles);

export default Search;
