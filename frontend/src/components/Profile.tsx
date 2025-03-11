import { useState } from "react"

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "Emma Jerrier",
    age: 22,
    height: 64, // in
    weight: 143, // lb
    goalSteps: 10000,
    goalCalories: 2000,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updated Profile:", formData) // Later, send to backend
    alert("Profile updated!")
  }

  return (
    <div className="profile-container">
      <h2>Profile Settings</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} /></label>
        <label>Age: <input type="number" name="age" value={formData.age} onChange={handleChange} /></label>
        <label>Height (cm): <input type="number" name="height" value={formData.height} onChange={handleChange} /></label>
        <label>Weight (kg): <input type="number" name="weight" value={formData.weight} onChange={handleChange} /></label>
        <label>Step Goal: <input type="number" name="goalSteps" value={formData.goalSteps} onChange={handleChange} /></label>
        <label>Calorie Goal: <input type="number" name="goalCalories" value={formData.goalCalories} onChange={handleChange} /></label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  )
}

export default Profile
