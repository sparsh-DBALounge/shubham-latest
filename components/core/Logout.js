'use client'
import React from 'react'
import { icons } from '@/env/icons'
import ModelHOC from '@/hoc/modelHOC'

const Logout = (props) => {
    return (
        <button className="logout-btn" onClick={() => props.openModel({
            key: "LOGOUT"
        })}>
            <img src={icons.LOGOUT} alt="logout" width={20} height={20} />
            <span>Logout</span>
        </button>
    )
}

export default ModelHOC(Logout)