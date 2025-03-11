import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const [user, setUser] = useState<{ name: string; steps: number; calories: number } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token")
      if (!token) {
        navigate("/login")
        return
      }

      try {
        const response = await fetch("http://127.0.0.1:5000/dashboard", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          throw new Error("Failed to fetch user data")
        }

        const data = await response.json()
        setUser(data) // Update state with backend data
      } catch (err) {
        setError("Failed to load dashboard data")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [navigate])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user?.name}!</h2>
      <div className="dashboard-stats">
        <p>Steps: {user?.steps}</p>
        <p>Calories Burned: {user?.calories}</p>
      </div>
    </div>
  )
}

export default Dashboard

