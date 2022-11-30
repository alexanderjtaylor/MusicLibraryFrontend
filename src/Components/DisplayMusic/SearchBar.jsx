import React, { useState } from 'react';

const SearchBar = (props) => {

    const [searchSong, setSearchSong] = useState('')

    function handleSearchSubmit(event) {
        event.preventDefault();
        let searchTerm = {
            searchSong: searchSong
        };
        props.searchSong(searchTerm);
    }

    return ( 
        <form onSubmit={handleSearchSubmit}>
            <input type='text' value={searchSong} onChange={(event) => setSearchSong(event.target.value)}/>
            <button type='submit'>Search Song</button>
        </form>
    );
}

export default SearchBar;