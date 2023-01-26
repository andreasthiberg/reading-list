import {useState} from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

function HamburgerMenu() {
    
    const [burgermenuOpen, setBurgermenuOpen] = useState(false)

    function handleMenuClick(){
        setBurgermenuOpen(!burgermenuOpen);
    }

    return (
        <>
        {burgermenuOpen ?
        <AiOutlineClose onClick={handleMenuClick} className="header-menu-icon close-menu-icon"/>
        :
        <RxHamburgerMenu onClick={handleMenuClick} className="header-menu-icon"/>
        }
        <div className="burger-menu-container">
            <ul className={`burgermenu ${burgermenuOpen ? " show-menu" : ""}`}>
                <li>Logga ut</li>
            </ul>
        </div>
        </>
    );
}

export default HamburgerMenu;