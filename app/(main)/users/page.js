import Table from "@/components/core/Table"

const users = [
    {
        name: "sparsh kadian",
        email: "sparsh@gmail.com",
        role: "admin",
    },
    {
        name: "Anmol Kothiyal",
        email: "anmol@gmail.com",
        role: "admin",
    },
    {
        name: "Nainish Singh",
        email: "nainish@gmail.com",
        role: "admin",
    }

]

export default function Home() {
    return (
        <div className="users-container">
            <h3>Users Page</h3>
            <div className="sub-heading-container">
                <p>Manage all users</p>
                <button className="add-user-btn">Add User</button>
            </div>

            <div className="users-table">
                <Table header={['S.No', 'Name', 'Email', 'Role']} />
            </div>
        </div>
    )
}