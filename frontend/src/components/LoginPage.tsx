import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    // Simulating a login process
    if (email === "test@domain.com" && password === "password123") {
      const mockData = {
        token: "mock-token-123", // Store a mock token
        username: "John Doe",
        steps: 5000,  // Mock steps data
        calories: 350, // Mock calories data
      }

      // Store the mock data in localStorage
      localStorage.setItem("token", mockData.token)
      localStorage.setItem("username", mockData.username)
      localStorage.setItem("steps", mockData.steps.toString())
      localStorage.setItem("calories", mockData.calories.toString())

      navigate("/dashboard")
    } else {
      setError("Invalid credentials, please try again.")
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🔑 Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
