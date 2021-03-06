import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/general-styles.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/home">IPF</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/posts" className="nav-link active" aria-current="page">Posts</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link active" aria-current="page">Login</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Más 
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/gift">Gift</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
    )
}

export default Navbar
