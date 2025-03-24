'use client'

import { icons } from "@/env/icons"
import useAuthHooks from "@/hooks/useAuthHooks"
import Link from "next/link"
import { usePathname } from "next/navigation"

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

export const SideBar = () => {
    const { logoutHandler } = useAuthHooks()
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
            <button onClick={logoutHandler} className="logout-btn">
                <img src={icons.LOGOUT} alt="logout" width={20} height={20} />
                Logout
            </button>
        </div>
    )
}