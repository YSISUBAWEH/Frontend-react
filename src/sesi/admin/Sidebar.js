import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Sidebar = () => {
    return(
      <div className="sidebaR">
        <div className="logo">
          <span className="logo-name">BabaGram</span>
        </div>

        <div className="sidebaR-content">
          <ul className="lists">
            <li className="list">
              <NavLink href="/" className="nav-linK">
                <i className="bx bx-home-alt icon"></i>
                <span className="linK">Dashboard</span>
              </NavLink>
            </li>
            <li className="list">
              <NavLink to='/admin/users' className="nav-linK">
                <i className="bx bx-bar-chart-alt-2 icon"></i>
                <span className="linK">Users</span>
              </NavLink>
            </li>
            <li className="list">
              <NavLink to='/admin/albums' className="nav-linK">
                <i className="bx bx-bar-chart-alt-2 icon"></i>
                <span className="linK">Albums</span>
              </NavLink>
            </li>
          </ul>

          <div className="bottom-cotent">
            <li className="list">
              <NavLink href="#" className="nav-linK">
                <i className="bx bx-cog icon"></i>
                <span className="linK">Settings</span>
              </NavLink>
            </li>
            <li className="list">
              <NavLink href="#" className="nav-linK">
                <i className="bx bx-log-out icon"></i>
                <span className="linK">Logout</span>
              </NavLink>
            </li>
          </div>
        </div>
      </div>
    );
}

export default Sidebar;