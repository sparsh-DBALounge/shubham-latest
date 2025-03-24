import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h2>Dashboard Page</h2>
      <div className="dashboard-btns">
        <Link href={'/users'}>
          <button className="dashboard-btn">Upload File</button>
        </Link>
        <button className="dashboard-btn">Download File</button>
      </div>
    </div>
  )
}