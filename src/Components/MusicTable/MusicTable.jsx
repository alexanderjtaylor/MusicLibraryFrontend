
const MusicTable = (props) => {
    return ( 
        <table>
          <thead>
            <tr>
              <th>Song Order</th>
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Release Date</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {props.parentSongs.map((song, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{song.title}</td>
                  <td>{song.artist}</td>
                  <td>{song.album}</td>
                  <td>{song.release_date}</td>
                  <td>{song.genre}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
     );
}
 
export default MusicTable;