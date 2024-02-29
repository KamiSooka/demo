import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParentComponent from '../parentcomponents/ParentComponent';

function NavBar() {
    return (
        <div>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Header</a>
                
                <div className='d-flex justify-content-end ms-auto'>
                    <ParentComponent />
                </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
