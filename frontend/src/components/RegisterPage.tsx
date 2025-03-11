import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // If you're using React Router for navigation

function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // For showing loading indicator
  const navigate = useNavigate(); // For navigation after successful registration

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Check if passwords match
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    // Prepare the data to send to the backend
    const data = {
      firstName,
      lastName,
      email,
      password
    };

    setLoading(true); // Set loading state to true

    try {
      // Send data to the Flask backend
      const response = await fetch('http://127.0.0.1:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();

      if (response.status === 201) {
        setMessage('Registration successful!');
        navigate('/login'); // Redirect to the login page
      } else {
        setMessage(responseData.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error registering user');
    } finally {
      setLoading(false); // Set loading state to false after the request finishes
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RegisterPage;
