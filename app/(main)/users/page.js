"use client"

import React, { useEffect } from "react";
import Table from "@/components/core/Table";
import Drawer from "@/hoc/drawerHOC";
import useAuthHooks from "@/hooks/useAuthHooks";

function Home({ openDrawer }) {

    const { fetchUsers, allUsers } = useAuthHooks()

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className="users-container">
            <h3>Users Page</h3>
            <div className="sub-heading-container">
                <p>Manage all users</p>
                <button
                    className="add-user-btn"
                    onClick={() => openDrawer({ component: "ADD_USER", title: "Add User" })}
                >
                    Add User
                </button>
            </div>

            <div className="users-table">
                <Table header={['S.No', 'Employee Code', 'Name', 'Email', 'Gender', 'Employee Status', 'Date of Resignation', 'Date of Exit']} >
                    {allUsers?.map((user, idx) => (
                        <tr key={user.employeeId}>
                            <td>{idx + 1}</td>
                            <td>{user.employeeId}</td>
                            <td>{user.fullName}</td>
                            <td>{user.officialEmailId}</td>
                            <td>{user.gender}</td>
                            <td>{user.employeeStatus}</td>
                            <td>{new Date(user.dateOfResignation).toLocaleDateString()}</td>
                            <td>{new Date(user.dateOfExit).toLocaleDateString()}</td>
                        </tr>
                    )
                    )}
                </Table>
            </div>
        </div>
    );
}

export default Drawer(Home); 
