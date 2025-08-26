import React from 'react'
import { Link } from 'react-router-dom';

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    icon: React.ReactNode;
}

const NavLink = ({href, children, icon}: NavLinkProps) => {
    return(
        <Link
            to={href}
            className={
                'h-full flex items-center px-3 text-xs text-headerContent hover:text-headerContentHover hover:border-b-2 border-headerContentHover space-x-0.5'
            }
        >
            <span>{icon}</span>
            <span>{children}</span>
        </Link>
    )
}

export default NavLink