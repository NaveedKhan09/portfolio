import "@fortawesome/fontawesome-free/css/all.min.css";

import '../styles/Header.css'
import { useState } from "react";
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleNavbar = () => {
        setShowMenu(!showMenu)

    }
    return (
        <div className="Navbar">
            <img src="images/naveed khan web developer.png" alt="logo" />
            <div className={showMenu ? "mobileMenu" : "webMenu"}>
                <div className="NavLinks">
                    <a href="#"><div className="Navlink" onClick={toggleNavbar}>HOME</div></a>
                    <a href="#About"><div className="Navlink" onClick={toggleNavbar}>ABOUT</div></a>
                    <a href="#Technologies"><div className="Navlink" onClick={toggleNavbar}>TECH</div></a>
                    <a href="#projects"><div className="Navlink" onClick={toggleNavbar}>PROJECTS</div></a>
                    <a href="#Contact"><div className="Navlink" onClick={toggleNavbar}>CONTACT</div></a>
                </div>
            </div>
            <button className="icon" onClick={toggleNavbar}>
                <i className="fa-solid fa-bars"></i>
            </button>
        </div>
    )
}
export default Header;