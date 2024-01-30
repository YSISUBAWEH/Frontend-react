import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

const Table = () => {

	const [albumData, setAlbumData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const result = await axios('http://localhost:8000/api/albums');
            console.log(result);
            setAlbumData(result.data.results);
        } catch (err) {
            console.log("Something went wrong");
        }
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8000/api/albumsdelete/` + id);
        const newAlbumData = albumData.filter((item) => {
            return (
                item.id !== id
            );
        });
        console.log(newAlbumData);
        setAlbumData(newAlbumData);
    }

    return (
        <table className='table table-hovered'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama Album</th>
                    <th>Deskripsi</th>
                    <th>Users ID</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {
                    albumData.map((album, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{album.NamaAlbum}</td>
                                <td>{album.deskripsi}</td>
                                <td>{album.users_id}</td>
                                <td>
                                    <NavLink to={`/admin/albums/view/${album.id}`} className='btn btn-primary me-2'>View</NavLink>
                                    <NavLink to={`/admin/albums/edit/${album.id}`} className='btn btn-primary me-2'>Edit</NavLink>
                                    <button onClick={() => handleDelete(album.id)} className='btn btn-danger'>Hapus</button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default Table;