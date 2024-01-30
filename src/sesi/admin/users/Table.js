import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

const Table = () => {

	const [userData , setUserData] = useState([]);

    useEffect(()=>{
        fecthData();
    },[])

    const fecthData = async () => {
        try{
            const result = await axios('http://localhost:8000/api/users');
            console.log(result);
			setUserData(result.data.results);
        }catch (err){
            console.log("something wrong",err);
        }
    }

	const handleDelete = async(id)=> {
		await axios.delete('http://localhost:8000/api/usersdelete/'+id);
		const newUserData = userData.filter((item) => {
			return(
				item.id !== id
			)
		})
		console.log(newUserData);
		setUserData(newUserData);
	}
    return (
        <table className='table table-hovered'>
	        <thead>
	          <tr>
				<th>no</th>
	            <th>Username</th>
	            <th>Email</th>
	            <th>Nama Lengkap</th>
	            <th>Alamat</th>
				<th>Aksi</th>
	          </tr>
	        </thead>
	        <tbody>
				{
					userData.map((user, i) => {
						return(
							<tr key={i}>
								<td>{i + 1}</td>
								<td>{user.username}</td>
								<td>{user.email}</td>
								<td>{user.nama_lengkap}</td>
								<td>{user.alamat}</td>
								<td className='p-1'>
									<NavLink to={`/admin/users/view/${user.id}`} className='btn btn-primary me-1'>view</NavLink>
									<NavLink to={`/admin/users/edit/${user.id}`} className='btn btn-primary me-1'>edit</NavLink>
									<button onClick={()=> handleDelete(user.id)} className='btn btn-danger'>hapus</button>
								</td>
							</tr>
						)
					})
				}
	        </tbody>
	    </table>
    );
}

export default Table;