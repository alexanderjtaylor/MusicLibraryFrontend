import Delete from "./Delete";

const DisplayMusic = (props) => {
    return ( 
        <table className='prop-tabel'>
          <thead>
            <tr>
              <th className='prop-labels'>Song Order</th>
              <th className='prop-labels'>Title</th>
              <th className='prop-labels'>Artist</th>
              <th className='prop-labels'>Album</th>
              <th className='prop-labels'>Release Date</th>
              <th className='prop-labels'>Genre</th>
            </tr>
          </thead>
          <tbody>
            {props.songs.map((song, index) => {
              return (
                <tr key={index + 1}>
                  <td className='prop-values'>{index + 1}</td>
                  <td className='prop-values'>{song.title}</td>
                  <td className='prop-values'>{song.artist}</td>
                  <td className='prop-values'>{song.album}</td>
                  <td className='prop-values'>{song.release_date}</td>
                  <td className='prop-values'>{song.genre}</td>
                  <Delete songId={song.id} getAllSongs = {props.getAllSongs}/>
                </tr>
              );
            })}
          </tbody>
        </table>
     );
}
 
export default DisplayMusic;