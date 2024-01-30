import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Ausers from './sesi/admin/users/User';
import AddUser from './sesi/admin/users/AddUser';
import EditUser from './sesi/admin/users/Edit';
import ViewUser from './sesi/admin/users/View';

import Aalbums from './sesi/admin/albums/Album';
import AddAlbum from './sesi/admin/albums/Add';
import EditAlbum from './sesi/admin/albums/Edit';
import ViewAlbum from './sesi/admin/albums/View';

function Rute(){
    return(
        <Router>
            <Routes>
                <Route path='/admin/users' element={<Ausers />} />
				<Route path='/admin/users/adduser' element={<AddUser />} />
				<Route path='/admin/users/view/:id' element={<ViewUser />} />
				<Route path='/admin/users/edit/:id' element={<EditUser />} />

                <Route path='/admin/albums' element={<Aalbums />} />
				<Route path='/admin/albums/add' element={<AddAlbum />} />
				<Route path='/admin/albums/view/:id' element={<ViewAlbum />} />
				<Route path='/admin/albums/edit/:id' element={<EditAlbum />} />
            </Routes>
        </Router>
    );
}

export default Rute;