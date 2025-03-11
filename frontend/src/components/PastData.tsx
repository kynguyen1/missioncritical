import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StravaAuth from './StravaAuth'; 

const PastData = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [workouts, setWorkouts] = useState<any[]>([])

  const STRAVA_API_URL = 'https://www.strava.com/api/v3/athlete/activities'

  useEffect(() => {
    // Fetch workout data after authentication
    if (accessToken) {
      axios
        .get(STRAVA_API_URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          setWorkouts(response.data)
        })
        .catch((error) => {
          console.error('Error fetching workouts:', error)
        })
    }
  }, [accessToken])

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📊 View Your Past Data & Workouts</h2>

      <p className="mb-4 text-lg">
        Connect your Strava account to see a detailed history of your workouts and performance trends.
      </p>

      <StravaAuth setAccessToken={setAccessToken} />

      {workouts.length > 0 ? (
        <div>
          <h3 className="font-semibold text-xl mt-6 mb-3">Your Workouts:</h3>
          {workouts.map((workout) => (
            <div key={workout.id} className="mb-6 border-b pb-4">
              <h4 className="font-medium text-lg">{workout.name}</h4>
              <p className="text-sm text-gray-500">
                {workout.type} | {new Date(workout.start_date).toLocaleDateString()}
              </p>
              <p>Duration: {Math.floor(workout.elapsed_time / 60)} minutes</p>
              <p>Distance: {workout.distance / 1000} km</p>
              <p>Average Speed: {((workout.distance / 1000) / (workout.elapsed_time / 3600)).toFixed(2)} km/h</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 text-gray-700">
          <p>No workouts found. Please log in to your Strava account to see your data.</p>
          <p className="mt-2 text-sm text-gray-500">
            Once connected, you'll be able to track your steps, runs, cycles, and other activities!
          </p>
        </div>
      )}
    </div>
  )
}

export default PastData
