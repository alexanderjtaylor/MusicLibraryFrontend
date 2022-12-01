import React, { useState } from 'react';

const SearchBar = (props) => {

    const [searchSong, setSearchSong] = useState('')

    function searchMusic(event){
        event.preventDefault();
        let response = props.songs.filter(searchSong)
        props.setSongs(response)
    }

    return ( 
        <form onSubmit={searchMusic}>
            <input type='text' value={searchSong} onChange={(event) => setSearchSong(event.target.value)}/>
            <button type='submit'>Search</button>
        </form>
    );
}

export default SearchBar;

