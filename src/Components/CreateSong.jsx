import React, { useState } from 'react';


const CreateSong = (props) => {

    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [release_date, setReleaseDate] = useState('')
    const [genre, setGenre] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        };
        props.postNewSong(newSong)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <form className='creating-wrapper'>
                <div className='adding-label-n-box'>
                    <label className='adding-label'>Title:</label>
                    <input type='text' className='adding-box' value={title} onChange={(event) => setTitle(event.target.value)}/>
                </div>
                <div className='adding-label-n-box'>
                    <label className='adding-label'>Artist:</label>
                    <input type='text' className='adding-box' value={artist} onChange={(event) => setArtist(event.target.value)}/>
                </div>
                <div className='adding-label-n-box'>
                    <label className='adding-label'>Album:</label>
                    <input type='text' className='adding-box' value={album} onChange={(event) => setAlbum(event.target.value)}/>
                </div>
                <div className='adding-label-n-box'>
                    <label className='adding-label'>Release Date:</label>
                    <input type='date' className='adding-box' value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>
                </div>
                <div className='adding-label-n-box'>
                    <label className='adding-label'>Genre:</label>
                    <input type='text' className='adding-box' value={genre} onChange={(event) => setGenre(event.target.value)}/>
                </div>
                <button type='submit' className='add-btn'>Add Song</button>
            </form>
        </form>
     );
}
 
export default CreateSong;