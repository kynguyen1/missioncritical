import { useState } from 'react'

interface Workout {
  id: number
  type: string
  duration: number
  reps?: number
  sets?: number
  distance?: number
  calories?: number
}

const WorkoutInput = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [formData, setFormData] = useState<Partial<Workout>>({
    type: '',
    duration: 0,
    reps: undefined,
    sets: undefined,
    distance: undefined,
    calories: undefined,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value ? Number(e.target.value) : '', // ✅ Ensures numeric values are always numbers
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.type || (formData.duration ?? 0) <= 0) {
        alert('Please enter valid workout details!')
        return
      }

    const newWorkout: Workout = {
      id: workouts.length + 1,
      type: formData.type,
      duration: Number(formData.duration),
      reps: formData.reps ? Number(formData.reps) : undefined,
      sets: formData.sets ? Number(formData.sets) : undefined,
      distance: formData.distance ? Number(formData.distance) : undefined,
      calories: formData.calories ? Number(formData.calories) : undefined,
    }

    setWorkouts([...workouts, newWorkout])
    setFormData({ type: '', duration: 0, reps: undefined, sets: undefined, distance: undefined, calories: undefined })
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🏋️ Log Your Workout</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <select name="type" value={formData.type} onChange={handleChange} className="border p-2">
          <option value="">Select Workout Type</option>
          <option value="Running">Running</option>
          <option value="Cycling">Cycling</option>
          <option value="Weightlifting">Weightlifting</option>
          <option value="Swimming">Swimming</option>
        </select>

        <input type="number" name="duration" placeholder="Duration (minutes)" value={formData.duration} onChange={handleChange} className="border p-2" />

        {formData.type === 'Weightlifting' && (
          <>
            <input type="number" name="reps" placeholder="Reps" value={formData.reps || ''} onChange={handleChange} className="border p-2" />
            <input type="number" name="sets" placeholder="Sets" value={formData.sets || ''} onChange={handleChange} className="border p-2" />
          </>
        )}

        {formData.type === 'Running' || formData.type === 'Cycling' ? (
          <input type="number" name="distance" placeholder="Distance (miles/km)" value={formData.distance || ''} onChange={handleChange} className="border p-2" />
        ) : null}

        <input type="number" name="calories" placeholder="Calories Burned (optional)" value={formData.calories || ''} onChange={handleChange} className="border p-2" />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Log Workout</button>
      </form>

      <h3 className="text-xl font-bold mt-6">📋 Logged Workouts</h3>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id} className="border p-2 my-2">
            {workout.type} - {workout.duration} min {workout.distance ? `, ${workout.distance} km` : ''} {workout.reps ? `, ${workout.reps} reps` : ''} {workout.sets ? `, ${workout.sets} sets` : ''}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WorkoutInput
