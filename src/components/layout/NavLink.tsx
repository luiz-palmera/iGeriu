import React from 'react'

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    icon: React.ReactNode;
}

const NavLink = ({href, children, icon}: NavLinkProps) => {
    return(
        <a 
            href={href}
            className={
                'h-full flex items-center px-3 text-xs text-headerContent hover:text-headerContentHover hover:border-b-2 border-headerContentHover space-x-0.5'
            }
        >
            <span>{icon}</span>
            <span>{children}</span>
        </a>
    )
}

export default NavLink