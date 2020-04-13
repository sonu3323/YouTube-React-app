import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from "./VideoItem";

function VideoList({videoItem ,onSelectVideo}) {
   
    return (
      <Grid container spacing={4}>
        {
          videoItem.map((video , id) => <VideoItem onVideoSelect={onSelectVideo} key={id} videoItem={video}/>)
        }
      </Grid>
    )
}

export default VideoList
