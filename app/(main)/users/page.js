"use client"
import React from "react";
import Table from "@/components/core/Table";
import Drawer from "@/hoc/drawerHOC";

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
];

function Home({ openDrawer }) {
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
                <Table header={['S.No', 'Employee Code', 'Email', 'Role', 'Created By']} />
            </div>
        </div>
    );
}

export default Drawer(Home); 
