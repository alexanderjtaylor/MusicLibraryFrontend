import React, { useState } from 'react';

const SearchBar = (props) => {

    const [searchSong, setSearchSong] = useState('')

    function searchMusic(event){
        event.preventDefault();
        let response = props.songs.filter((song) => {
            if (song.title.includes(searchSong) || song.artist.includes(searchSong) || song.album.includes(searchSong) || song.release_date.includes(searchSong) || song.genre.includes(searchSong)){
                return true;
            }
            else{
                return false;
            }});
        props.setSongs(response)
    }

    return ( 
        <form className='entire-search-bar' onSubmit={searchMusic}>
            <input className='search-box' type='text' value={searchSong} onChange={(event) => setSearchSong(event.target.value)}/>
            <button className='search-btn' type='submit'>Search</button>
        </form>
    );
}

export default SearchBar;

