import React, { useState } from 'react';

const SearchBar = (props) => {

    const [searchSong, setSearchSong] = useState('')

    function searchMusic(event){
        event.preventDefault();
        let response = props.songs.filter((searchSong) => {
            if (response.title.includes(searchSong) || response.artist.includes(searchSong)){
                return true;
            }
            else{
                return false;
            }});
        return props.setSongs(response)
    }

    return ( 
        <form className='entire-search-bar' onSubmit={searchMusic}>
            <input className='search-box' type='text' value={searchSong} onChange={(event) => setSearchSong(event.target.value)}/>
            <button className='search-btn' type='submit'>Search</button>
        </form>
    );
}

export default SearchBar;

