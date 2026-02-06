import React from "react"; 
import Link from "../link/Link";

const navLinks = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Blog", url: "/blog" },
  { id: 4, name: "Projects", url: "/projects" },
  { id: 5, name: "Contact", url: "/contact" }
];


const Navbar = () => {
    return(
        <nav>
            <ul className="flex">
            {
                navLinks.map(route => <Link key={route.id} route={route}></Link>)
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
        </nav>
    );
};

export default Navbar;