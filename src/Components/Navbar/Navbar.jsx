const Navbar = () => {


    const routes = [
        { id: '1', path: '/', name: 'Home' },
        { id: '2', path: '/about', name: 'About' },
        { id: '3', path: '/services', name: 'Services' },
        { id: '4', path: '/contact', name: 'Contact' },
        { id: '5', path: '/dashboard', name: 'Dashboard' },
      ];
      
    return (
        <nav>
            
        <ul className="md:flex">
{
    routes.map(route => <li className="mr-60 ml-6 p-7 text-3xl font-semibold" key={route.id}><a href={route.path}>{route.name}</a></li>)
}

        </ul>

        </nav>
    );
};

export default Navbar;