'use client'

import { SideBar } from "@/components/core/Sidebar"
import withAuth from "@/hoc/withAuth"

function mainLayout({ children }) {
    return <div style={{ display: 'flex' }}>
        <SideBar />
        <div style={{ flex: 1, padding: '20px' }}>
            {children}
        </div>
    </div>
}

export default withAuth(mainLayout)