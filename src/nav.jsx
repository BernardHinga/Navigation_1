import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <nav>
            <div className="logo">
                <h3>Navigation</h3>
            </div>
            <ul class="navbar">
                <li className="nav-item">
                    <Link to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/about'>About</Link>
                </li>
                <li className="nav-item">
                    <Link to='/services'>Services</Link>
                </li>
                <li className="nav-item">
                    <Link to='/partners'>Partners</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact-us'>Contact</Link>
                </li>
            </ul>
            <div className="toggler">
                <i className="fas fa-bars"></i>
            </div>
        </nav>
    )
}

export default Nav;