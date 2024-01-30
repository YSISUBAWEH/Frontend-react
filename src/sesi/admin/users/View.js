import React, { useEffect , useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const View = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [user , setUser] = useState([]);

    useEffect(() => {
        fecthUser();
    },[id]);

    const fecthUser = async () => {
        try {
            const result =  await axios.get('http://localhost:8000/api/users/'+ id);
            console.log(result.data.users);
            setUser(result.data.users);
        } catch (err) {
            console.log('something wrong');
        }
    }

    const balik= () => {
        navigate('/');
    }
    return(
        <>
            <p>username : {user.username} </p>
            <p>email : {user.email} </p>
            <p>password : {user.password} </p>
            <p>nama lengkap : {user.nama_lengkap} </p>
            <p>alamat : {user.alamat} </p>
            <button onClick={balik}>balik</button>
        </>
    );
}

export default View;