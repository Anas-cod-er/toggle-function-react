import React from "react";
import Link from "../link/Link";
import { Menu, CircleX } from 'lucide-react';
import { useState } from "react";

const navLinks = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Blog", url: "/blog" },
    { id: 4, name: "Projects", url: "/projects" },
    { id: 5, name: "Contact", url: "/contact" }
];


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links = navLinks.map(route => <Link key={route.id} route={route}></Link>);

    return (
        <nav className="flex justify-between mx-10 mt-4 text-black">
            <span className="flex" onClick={() => setOpen(!open)}>
                {
                    open ? 
                        <CircleX className='lg:hidden'/> : 
                        <Menu className='lg:hidden'></Menu>
                }
                <ul className={`lg:hidden absolute duration-1000
                    ${open ? 'top-8' : '-top-40'}
                    bg-amber-300`}>
                    {links}
                </ul>
                <h3 className="ml-4">My Navbar</h3>
            </span>
            <ul className="lg:flex hidden">
                {
                    links
                }
            </ul>

            {/* <ul className="flex">
                {
                    navLinks.map(route =><li className="mr-10"><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}
            {/* <ul className="flex">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul> */}

            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;