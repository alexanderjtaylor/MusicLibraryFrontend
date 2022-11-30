import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import CreateSong from './Components/CreateSong/CreateSong';
import SearchBar from './Components/DisplayMusic/SearchBar';


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
  }

  function addNewSong(song){
    let tempSong = [...songs, song];
    setSongs(tempSong)
  }

  function searchSong(searchTerm){
    let searchUserSong = songs.includes(searchTerm);
    setSongs(searchUserSong)
  }

  return (
    <div>
      <SearchBar searchSong = {searchSong} />
      <DisplayMusic parentSongs = {songs} />
      <CreateSong addNewSong = {addNewSong} postNewSong = {postNewSong}/>
    </div>
  );
}

export default App;
