import { icons } from "@/env/icons"

export const SideBar = () => {
    return (
        <div className="sidebar">
            <button className="sidebar-btn">Add User</button>
            <button className="sidebar-btn">Upload File</button>
            <button className="sidebar-btn">Download File</button>
            <button className="logout-btn">
                <img src={icons.LOGOUT} alt="logout" width={20} height={20} />
                Logout
            </button>
        </div>
    )
}