import { SideBar } from "@/components/core/Sidebar"

export default function mainLayout({ children }) {
    return <div style={{ display: 'flex' }}>
        <SideBar />
        <div style={{ flex: 1, padding: '20px' }}>
            {children}
        </div>
    </div>
}