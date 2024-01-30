import React from 'react';
import Sidebar from '../Sidebar';
import Table from './Table';
import {NavLink} from 'react-router-dom';

const Album = () => {
    return(
        <div className='col-xl-12 d-flex'>
            <Sidebar />
            <div className='content-wrapper'>
                
                <div className='col-sm-12 container mt-5'>
                    <div className='card p-2'>
                        <div className='card-body'>
                            <div className='d-flex justify-content-between'>
                                <h3 className='fw-bold mb-2'>Tabel Albums</h3>
                              	<NavLink to={`/admin/albums/add`} className="btn btn-primary">Tambah</NavLink>
                            </div>
                        <hr />
                        <Table />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Album;