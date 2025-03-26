'use client'

import { useEffect } from "react"
import { useDashbaordHooks } from "@/hooks/useDashboardHooks"
import { useSelector } from "react-redux"
import UploadUserFile from "@/components/UploadUserFile"
import { useFileHooks } from "@/hooks/useFileHooks"

export default function Home() {

  const { fetchDashboardData } = useDashbaordHooks()
  const { downloadFile, download } = useFileHooks()
  const { dashboard } = useSelector((state) => state.dashboard)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  return (
    <div>
      <h2>Dashboard Page</h2>
      <div className="dashboard-btns">
        <UploadUserFile />
        <button onClick={downloadFile} className="dashboard-btn">{download ? 'Downloading..' : 'Download File'}</button>
      </div>

      <div className="dashbaord-cards__container">
        <div className="dashboard-card">
          <p className="dashboard-card__title">Total Users</p>
          <p className="dashboard-card__count">{dashboard.userDataCount}</p>
        </div>
        <div className="dashboard-card">
          <p className="dashboard-card__title">Total Inactive Users</p>
          <p className="dashboard-card__count">{dashboard.userStatusCount}</p>
        </div>

      </div>
    </div>
  )
}