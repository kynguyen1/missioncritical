// src/components/StravaAuth.tsx
import React, { useState } from 'react';

// Define the type for the props
interface StravaAuthProps {
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const StravaAuth: React.FC<StravaAuthProps> = ({ setAccessToken }) => {
  const [authUrl, setAuthUrl] = useState<string>(''); // Example, replace with actual Strava auth logic

  return (
    <div>
      <a href={authUrl}>Connect with Strava</a>
    </div>
  );
}

export default StravaAuth;
