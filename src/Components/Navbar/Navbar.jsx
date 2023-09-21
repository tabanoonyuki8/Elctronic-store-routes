import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai';
const Navbar = () => {

const [open,setOpen]=useState(false);

    const routes = [
        { id: '1', path: '/', name: 'Home' },
        { id: '2', path: '/about', name: 'About' },
        { id: '3', path: '/services', name: 'Services' },
        { id: '4', path: '/contact', name: 'Contact' },
        { id: '5', path: '/dashboard', name: 'Dashboard' },
      ];
      
    return (
        <nav className="p-6">
            <div className="md:hidden text-3xl" onClick={() =>setOpen(!open)}>
                {
                    open=== true ? <AiOutlineClose></AiOutlineClose> :   <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
                }
          
            </div>
        <ul className={`md:flex absolute md:static p-5 m-2 text-white bg-slate-800 md:bg-fuchsia-100 md:text-black duration-1000
        ${open ? 'top-16' : '-top-60'}
        `}>
{
    routes.map(route => <Link  key={route.id} route={route}></Link>)
}

        </ul>
        <br/>

        <h4 className="text-5xl text-center font-bold text-yellow-900">Elctronnic <span className="text-yellow-600">Shop</span></h4>
        </nav>
    );
};

export default Navbar;