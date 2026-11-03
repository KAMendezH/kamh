// CSS
import './navigation.css';

// REACT
import { NavLink } from 'react-router';

export default function Navigation() {
    return(
        <nav className='Navigation'>
            <NavLink className={({isActive}) => `Navigation__NavLink ${isActive && "Navigation__NavLink--active"}`} to="/">HOME</NavLink>
            <NavLink className={({isActive}) => `Navigation__NavLink ${isActive && "Navigation__NavLink--active"}`} to="/about_me">ABOUT</NavLink>
            <NavLink className={({isActive}) => `Navigation__NavLink ${isActive && "Navigation__NavLink--active"}`} to="/web">WEB</NavLink>
            <NavLink className={({isActive}) => `Navigation__NavLink ${isActive && "Navigation__NavLink--active"}`} to="/osint">OSINT</NavLink>
            <NavLink className={({isActive}) => `Navigation__NavLink ${isActive && "Navigation__NavLink--active"}`} to="/components">COMPONENTS</NavLink>
            <NavLink className={({isActive}) => `Navigation__NavLink ${isActive && "Navigation__NavLink--active"}`} to="/tools">TOOLS</NavLink>
        </nav>
    );
};