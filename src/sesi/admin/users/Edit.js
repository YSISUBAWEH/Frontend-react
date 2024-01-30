import React, { useEffect , useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [userInput , setUserInput] = useState({
        username: "",
        email: "",
        password:"",
        nama_lengkap: "",
        alamat: "",
        status: ""
    });

    useEffect(() => {
        fecthUser();
    },[id]);

    const fecthUser = async () => {
        try {
            const result =  await axios.get('http://localhost:8000/api/users/'+ id);
            console.log(result.data.users);
            setUserInput(result.data.users);
        } catch (err) {
            console.log('something wrong');
        }
    }

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
            await axios.put('http://localhost:8000/api/usersupdate/'+ id, userInput);
            console.log('error');
            navigate('/admin/users');
        } catch (err) {
            console.log('something wrong!',err);
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
                    <input type="hidden" id="id" name="id" value={id} className="form-control" />
                        <div className='row mb-3'>
                            <div className="col-sm-6">
                                <label htmlFor="username">Username:</label>
                                <input type="text" id="username" name="username" value={userInput.username} className="form-control" onChange={e => changeUserHandler(e)} required />
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" value={userInput.email} className="form-control" onChange={e => changeUserHandler(e)} required />
                            </div>                           
                        </div>

                        <div className="mb-3">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" value={userInput.password} className="form-control" onChange={e => changeUserHandler(e)} required />
                            </div>

                        <div className="mb-3">
                            <label htmlFor="nama_lengkap">Nama Lengkap:</label>
                            <input type="text" id="nama_lengkap" name="nama_lengkap" value={userInput.nama_lengkap} className="form-control" onChange={e => changeUserHandler(e)} required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="alamat">Alamat:</label>
                            <input type="text" id="alamat" name="alamat" value={userInput.alamat} className="form-control" onChange={e => changeUserHandler(e)} required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="status">Status:</label>
                            <input type="text" id="status" name="status" value={userInput.status} className="form-control" onChange={e => changeUserHandler(e)} required />
                        </div>

                        <button type="submit" className="btn btn-success w-100" onClick={e => onSubmit(e)}>Edit Pengguna</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Edit;