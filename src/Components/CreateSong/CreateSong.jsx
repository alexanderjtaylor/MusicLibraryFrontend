import React, { useState } from 'react';


const CreateSong = (props) => {

    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [genre, setGenre] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            releaseDate: releaseDate,
            genre: genre
        };
        props.addNewSongProp(newSong);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>
            <label>Artist</label>
            <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <label>Album</label>
            <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <label>Release Date</label>
            <input type='date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
            <label>Genre</label>
            <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            <button type='submit'>Add Song</button>
        </form>
     );
}
 
export default CreateSong;