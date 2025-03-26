'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import Logout from "./Logout"
const links = [
    {
        href: '/',
        text: 'Dashboard'
    },
    {
        href: '/users',
        text: 'Users'
    }
]

export const SideBar = (props) => {
    const pathName = usePathname()

    return (
        <div className="sidebar">
            <div className="function-btns">
                {links.map((link, i) => (
                    <Link href={link.href} key={i}>
                        <button className="sidebar-btn" style={{
                            backgroundColor: pathName === link.href ? "#f58224d9" : "#f58224"
                        }}>{link.text}</button>
                    </Link>
                ))}
            </div>
            <Logout />
        </div>
    )
}
