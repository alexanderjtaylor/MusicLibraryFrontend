import axios from 'axios';

const Delete = (props) => {

    async function deleteSong(){
        const response = await axios.delete(`https://cors-anywhere.herokuapp.com/http://musiclibrary1-env.eba-n7wfm2rn.us-east-2.elasticbeanstalk.com/music/${props.songId}/`)
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