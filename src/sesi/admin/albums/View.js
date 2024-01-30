import React, { useEffect , useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const View = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [album , setAlbum] = useState([]);

    useEffect(() => {
        fecthAlbum();
    },[id]);

    const fecthAlbum = async () => {
        try {
            const result =  await axios.get('http://localhost:8000/api/albums/'+ id);
            console.log(result.data.album);
            setAlbum(result.data.album);
        } catch (err) {
            console.log('something wrong');
        }
    }

    const balik= () => {
        navigate('/admin/albums');
    }
    return(
        <>
            <p>Nama Album: {album.NamaAlbum} </p>
            <p>Deskripsi : {album.deskripsi} </p>
            <button onClick={balik}>balik</button>
        </>
    );
}

export default View;