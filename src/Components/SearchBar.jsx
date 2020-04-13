import React , {useState, useEffect} from 'react'
import {Paper , TextField} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import "../App.css";

function Search({onFormSubmit}) {
  
  const [search, setSearch] = useState("")

 const handleChange=(e) => setSearch(e.target.value); 

 const handleSubmit =(e) => {
   
    onFormSubmit(search);
    e.preventDefault();
}
  
 
  return (
    <div className="main-container">
   <Paper elevation={6} style={{padding: '15px'}} >
      <form onSubmit={handleSubmit}>
        <TextField  fullWidth label="Search...." onChange={handleChange} />
        <div style={{padding: '15px'}}>
        <Button  variant="contained" color="primary" onClick={handleSubmit}>
        Search
      </Button>
      </div>
      </form>
    </Paper>
    </div>

    )
}

export default Search
