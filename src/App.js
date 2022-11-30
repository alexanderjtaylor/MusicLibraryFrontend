import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';


function App() {

  const [songs, setSongs] = useState([]);

  useEffect( async () => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/music/')
    console.log(response.data)
    setSongs(response.data)
  }

  return (
    <div>
      <MusicTable parentSongs = {songs} />
    </div>
  );
}

export default App;
