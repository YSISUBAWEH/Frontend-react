import React, { useEffect , useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [albumInput, setAlbumInput] = useState({
        NamaAlbum: "",
        deskripsi: "",
        users_id: "",
    });

    useEffect(() => {
        fetchAlbum();
    }, [id]);

    const fetchAlbum = async () => {
        try {
            const result = await axios.get(`http://localhost:8000/api/albums/${id}`);
            console.log(result.data.album);
            setAlbumInput(result.data.album);
        } catch (err) {
            console.log('something wrong');
        }
    }

    const changeAlbumHandler = (e) => {
        setAlbumInput((prevAlbumInput) => ({
            ...prevAlbumInput,
            [e.target.name]: e.target.value
        }));
        console.log(albumInput);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/albumsupdate/${id}`, albumInput);
            console.log('success');
            navigate('/admin/albums');
        } catch (err) {
            console.log('something wrong!', err);
        }
    }

    const balik = () => {
        navigate('/admin/albums');
    }

    return(
        <div className="container col-md-6">
            <div className='card mt-5'>
                <div className='card-body'>
                    <button onClick={balik} className='btn btn-warning'>Kembali</button>                    
                    <h2 className='card-title fw-bold text-center'>Edit Album</h2>                
            
                    <form>
                        <h2>Edit Data Album</h2>
                        <input type="hidden" id="id" name="id" value={id} disabled />

                        <div className='mb-3'>
                            <label htmlFor="NamaAlbum">Nama Album:</label>
                            <input type="text" id="NamaAlbum" name="NamaAlbum" className='form-control' value={albumInput.NamaAlbum} onChange={e => changeAlbumHandler(e)} required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="deskripsi">Deskripsi:</label>
                            <input type="text" id="deskripsi" name="deskripsi" className='form-control' value={albumInput.deskripsi} onChange={e => changeAlbumHandler(e)} required />
                            </div>
                        <div className='mb-3'>
                            <label htmlFor="users_id">Users ID:</label>
                            <input type="text" id="users_id" name="users_id" className='form-control' value={albumInput.users_id} onChange={e => changeAlbumHandler(e)} required />
                            </div>
                        <button type="submit" className='btn btn-success w-100' onClick={e => onSubmit(e)}>Selesai</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Edit;