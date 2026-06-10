import './style.css'

import { Link, NavLink } from 'react-router-dom';


export default function Header(){
    return(
        <header>
            <div>
                <Link to="/" className="header-logo">
                <h1>The GOATS</h1>
                </Link>
                </div>

                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Messi</NavLink>
                    <NavLink to="/">Neymar</NavLink>
                    <NavLink to="/">Cristiano</NavLink>

                </nav>

                
            
        </header>
    )
}