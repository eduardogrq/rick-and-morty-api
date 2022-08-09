import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="mb-5">
            <nav className="custom-nav py-3 text-center">
                <Link to={'/'} className="text-reset text-decoration-none">
                    <h1>Rick and Morty</h1>
                </Link>
            </nav>
        </div>
    )
}

export default Header;