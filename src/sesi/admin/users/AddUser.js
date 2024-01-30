import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

    const navigate = useNavigate();

    const [userInput , setUserInput] = useState({
        username: "",
        email: "",
        nama_lengkap: "",
        alamat: "",
        status: ""
    });

    const changeUserHandler = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        });
        console.log(userInput);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/addnew', userInput);
            navigate('/admin/users');
        } catch (err) {
            console.log('something wrong!');
        }
    }

    const balik= () => {
        navigate('/admin/users');
    }

    return(
        <div className="container col-md-6">
            <div className='card mt-5'>
                <div className='card-body'>
                    <button onClick={balik} className='btn btn-warning'>Kembali</button>                    
                    <h2 className='card-title fw-bold text-center'>Tambah Data Pengguna</h2>                
            
                        <form>
                            <div className='row mb-3'>
                                <div className='col-sm-6'>
                                    <label className='label' for="username">Username:</label>
                                    <input type="text" className='form-control' id="username" name="username" onChange={e => changeUserHandler(e)} required />
                                </div>
                                 <div className='col-sm-6'>
                                    <label className='label' for="email">Email:</label>
                                    <input type="email" className='form-control' id="email" name="email" onChange={e => changeUserHandler(e)} required />
                                </div>
                            </div>

                            <div className='mb-3'>
                                <label className='label' for="password">Password:</label>
                                <input type="password" className='form-control' id="password" name="password" onChange={e => changeUserHandler(e)} required />
                            </div>

                            <div className='mb-3'>
                                <label className='label' for="fullName">Nama Lengkap:</label>
                                <input type="text" className='form-control' id="nama_lengkap" name="nama_lengkap" onChange={e => changeUserHandler(e)} required />
                            </div>
                            
                            <div className='mb-3'>
                                <label className='label' for="address">Alamat:</label>
                                <input type="text" className='form-control' id="alamat" name="alamat" onChange={e => changeUserHandler(e)} required />
                            </div>

                            <div className='mb-3'>
                                <label className='label' for="address">Status:</label>
                                <input type="text" className='form-control' id="status" name="status" onChange={e => changeUserHandler(e)} required />
                            </div>

                            <button type="submit" className='btn btn-success w-100' onClick={e => onSubmit(e)}>Tambah Pengguna</button>
                        </form>
                </div>
            </div>
        </div>
    );
}

export default AddUser;