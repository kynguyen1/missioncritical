import { useState, useEffect } from 'react'


interface User {
  id: number
  name: string
  activity: string
  goal: number
  progress: number
  percentage: number
}

const mockLeaderboardData: User[] = [
  { id: 1, name: 'Alice', activity: 'Steps', goal: 10000, progress: 8500, percentage: (8500 / 10000) * 100 },
  { id: 2, name: 'Bob', activity: 'Steps', goal: 12000, progress: 9000, percentage: (9000 / 12000) * 100 },
  { id: 3, name: 'Charlie', activity: 'Steps', goal: 8000, progress: 7000, percentage: (7000 / 8000) * 100 },
]

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState<User[]>([])

  useEffect(() => {
    // Mock API call
    setLeaderboardData(mockLeaderboardData)
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🏆 Leaderboard</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Rank</th>
            <th className="border border-gray-300 p-2">User</th>
            <th className="border border-gray-300 p-2">Activity</th>
            <th className="border border-gray-300 p-2">Goal</th>
            <th className="border border-gray-300 p-2">Progress</th>
            <th className="border border-gray-300 p-2">Completion (%)</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData
            .sort((a, b) => b.percentage - a.percentage) // Sort by highest completion percentage
            .map((user, index) => (
              <tr key={user.id} className="text-center">
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{user.name}</td>
                <td className="border border-gray-300 p-2">{user.activity}</td>
                <td className="border border-gray-300 p-2">{user.goal}</td>
                <td className="border border-gray-300 p-2">{user.progress}</td>
                <td className="border border-gray-300 p-2 font-bold">{user.percentage.toFixed(1)}%</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Leaderboard
