import axios from 'axios';

const Delete = (props) => {

    async function deleteSong(){
        const response = await axios.delete(`http://127.0.0.1:8000/music/${props.songId}/`)
        console.log(response.data)
        props.getAllSongs()
    }

    return ( 
        <td>
            <button onClick={deleteSong} className='delete-btn'>Delete</button>
        </td>
     );
}
 
export default Delete;