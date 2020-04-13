import React, {useState , useEffect} from 'react';
import {Grid} from '@material-ui/core'
import Youtube from './api/Youtube'
import {SearchBar , VideoDetails , VideoList, Header } from './Components';

import "./App.css";

const App = () => {

    const [videos, setVideo] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState("")
    
   
   
   useEffect(()=> {
        handleSubmit('javascript');   
   } ,[])
   
    const handleSubmit = async (searchTerm)=> {
     const Res = await Youtube.get('search' , {params: {
        part:'snippet',
        maxResults: 5 ,
        key:process.env.REACT_APP_KEY,
        q: searchTerm
    } });
     
    setVideo(Res.data.items);
    setSelectedVideo(Res.data.items[0]);
}
 

const VideoSelect =(video) => {
    setSelectedVideo(video)
};


    return (
      
        <Grid justify="center" container spacing={8}>
            <Grid item xs={12} >  
              <Grid container spacing={6}>
              <Grid item xs={12} style={{display:"flex" , alignItems:"center" ,justifyContent:"center",fontSize:"2rem", letterSpacing:"1mm",opacity:"0.9", color:"lightBlue" }}>
                   <Header />
                    </Grid>
                    <Grid item xs={12}>
                   <SearchBar onFormSubmit={handleSubmit} />
                    </Grid>
                    <Grid item xs={8}>
                    <VideoDetails video={selectedVideo} />
                    </Grid>
                    <Grid item xs={4}>
                    <VideoList videoItem={videos} onSelectVideo={VideoSelect}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default App
