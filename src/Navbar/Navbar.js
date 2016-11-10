import React, {Component} from 'react';
import NavLink from '../components/NavLink';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav className="navbar navbar-light bg-faded">
                    <div className="container">
                        <NavLink to="/" className="navbar-brand">App Name</NavLink>
                        <ul className="nav navbar-nav float-xs-right">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="profile">Profile</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;