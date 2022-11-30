import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import CreateSong from './Components/CreateSong/CreateSong';


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

  function addNewSong(song){
    let tempSong = [...songs, song];
    setSongs(tempSong)
  }

  return (
    <div>
      <MusicTable parentSongs = {songs} />
      <CreateSong addNewSongProp = {addNewSong}/>
    </div>
  );
}

export default App;
