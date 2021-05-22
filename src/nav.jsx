import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <nav>
            <div className="logo">
                <h3>Navigation</h3>
            </div>
            <ul className="navbar">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/partners'>Partners</Link></li>
                <li><Link to='/contact-us'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;