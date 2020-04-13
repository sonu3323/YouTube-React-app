import React from 'react'
import {Grid, Paper, Typography} from '@material-ui/core';

function VideoItem({videoItem , onVideoSelect}) {
 
 const imgSrc = videoItem.snippet.thumbnails.medium.url;
    return (
      <Grid item xs={12}>
          <Paper style={{ display:"flex" , alignItems:"center" , flexDirection:"column" , cursor:"pointer"}} onClick={()=> onVideoSelect(videoItem)}> 
              <img src={imgSrc} alt="" style={{padding:"20px 10px"}} />
          <Typography variant="subtitle2">{videoItem.snippet.title}</Typography>
          </Paper>
      </Grid>
    )
}

export default VideoItem
