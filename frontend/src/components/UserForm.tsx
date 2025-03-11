import { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [goals, setGoals] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [privilege, setPrivilege] = useState('');
  const [userData, setUserData] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/user', {
        name,
        age,
        gender,
        weight,
        height,
        goals,
        activity_level: activityLevel,
        privilege,
      });

      setUserData(response.data); // Store response data to display
    } catch (err) {
      console.error('Error submitting form', err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
        <input type="number" placeholder="Weight (lbs)" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <input type="number" placeholder="Height (in)" value={height} onChange={(e) => setHeight(e.target.value)} />
        <input type="text" placeholder="Goals" value={goals} onChange={(e) => setGoals(e.target.value)} />
        <input type="number" placeholder="Activity Level" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} />
        <select value={privilege} onChange={(e) => setPrivilege(e.target.value)}>
          <option value="">Select Privilege</option>
          <option value="Parent">Parent</option>
          <option value="Child">Child</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      {userData && (
        <div>
          <h3>User Info</h3>
          <p>Name: {userData.name}</p>
          <p>Age: {userData.age}</p>
          <p>Gender: {userData.gender}</p>
          <p>Weight: {userData.weight}</p>
          <p>Height: {userData.height}</p>
          <p>BMI: {userData.bmi}</p>
          <p>BMR: {userData.bmr}</p>
          <p>TDEE: {userData.tdee}</p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
