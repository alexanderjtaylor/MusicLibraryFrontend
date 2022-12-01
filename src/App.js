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

  function searchSong(searchTerm){
    let searchUserSong = songs.includes(searchTerm);
    setSongs(searchUserSong)
  }

  return (
    <div>
      <SearchBar searchSong = {searchSong} />
      <div className='col-md-8'>
        <div className='border-box'><DisplayMusic parentSongs = {songs} /></div>
        <div className='border-box'><CreateSong postNewSong = {postNewSong}/></div>
      </div>
    </div>
  );
}

export default App;
