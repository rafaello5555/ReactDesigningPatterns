import logo from './logo.svg';
import React, {useState, useEffect} from "react";   // for state management and data loading
import './App.css';

function App() {
  //Create state variable to update data 
  const [data, setData] = useState([])
  //is hookup for fetching data.  callbackFunction that passed to useEffect will run after render
  useEffect(() => {
    // we use async function to make http request
    const fetchData = async() => {
      const result = await fetch("https://orangevalleycaa.org/api/videos").then(
        response => response.json()
      );
      // Display and update data
      setData(result);


    };

    fetchData();

  });
  return (
    <div className="App">
      <header>

        <h1>Videos</h1>
      </header>

    
      {data.map(video => (
        <div>
          <h2>{video.name}</h2>
          <video height={200} controls src={video.video_url} />
        </div>

        
      ))}

    
    
    
    </div>
  );
      
      
      
   
     
}

export default App;
