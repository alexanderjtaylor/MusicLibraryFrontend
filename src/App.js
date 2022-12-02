import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic';
import CreateSong from './Components/CreateSong';
import SearchBar from './Components/SearchBar';
import './App.css';


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

  async function postNewSong(newSong){
    const response = await axios.post('http://127.0.0.1:8000/music/', newSong)
    console.log(response.data)
    getAllSongs()
  }

  // async function editNewSong(fixedSong){
  //   const response = await axios.put('http://127.0.0.1:8000/music/', fixedSong)
  //   console.log(response.data)
  //   getAllSongs()
  // }

  return (
    <div>
      <div className='col-md-8'>
        <div className='border-box'>
          <h3 className='music-title'>Music Library</h3>
          <SearchBar songs = {songs} setSongs = {setSongs}/>
          <DisplayMusic parentSongs = {songs} />
          <h3 className='add-title'>Add to Library</h3>
          <CreateSong postNewSong = {postNewSong}/></div>
      </div>
    </div>
  );
}

export default App;
