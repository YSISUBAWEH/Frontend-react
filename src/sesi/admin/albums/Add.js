import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {

    const navigate = useNavigate();

    const [albumInput, setAlbumInput] = useState({
        NamaAlbum: "",
        deskripsi: "",
        users_id: "",
    });

    const changeAlbumHandler = (e) => {
        setAlbumInput({
            ...albumInput,
            [e.target.name]: e.target.value,
        });
        console.log(albumInput);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/albums/addnew', albumInput); // Adjust the endpoint
            navigate('/admin/albums');
        } catch (err) {
            console.log('Something went wrong!', err);
        }
    };

    const balik = () => {
        navigate('/admin/albums');
    };

    return(
        <div className="container col-md-6">
            <div className='card mt-5'>
                <div className='card-body'>
                    <button onClick={balik} className='btn btn-warning'>Kembali</button>                    
                    <h2 className='card-title fw-bold text-center'>Tambah Album</h2>                
                    <form>
                        <div className='mb-3'>
                            <label className='label' htmlFor="NamaAlbum">Nama Album:</label>
                            <input type="text" className='form-control' id="NamaAlbum" name="NamaAlbum" onChange={(e) => changeAlbumHandler(e)} required />
                        </div>
            
                        <div className='mb-3'>
                            <label className='label' htmlFor="deskripsi">Deskripsi:</label>
                            <input type="text" className='form-control' id="deskripsi" name="deskripsi" onChange={(e) => changeAlbumHandler(e)} required />
                        </div>
            
                        <div className='mb-3'>
                            <label className='label' htmlFor="users_id">Users ID:</label>
                            <input type="text" className='form-control' id="users_id" name="users_id" onChange={(e) => changeAlbumHandler(e)} required />
                        </div>
            
                        <button type="submit" className='btn btn-success w-100' onClick={(e) => onSubmit(e)}>Tambah Album</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Add;