import React from 'react'
import { Paper, Typography } from '@material-ui/core';


function VideoDetails({ video }) {

    if (!video) return <p>Loading...</p>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    console.log(video)
    return (
        <React.Fragment>
            <Paper elevation={6} style={{ height: '70%' }}>
                <iframe src={videoSrc} frameBorder="0" height="100%" width="100%" title="Video Player" ></iframe>
            </Paper>
            <Paper elevation={6} style={{ padding: "20px 10px" }}>
                <Typography gutterBottom variant="subtitle1">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography gutterBottom variant="subtitle2">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>

            </Paper>
        </React.Fragment>
    )
}

export default VideoDetails
