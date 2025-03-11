export const API_BASE_URL = "http://127.0.0.1:5000"; // Flask Backend URL

export const fetchUserData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/register_user`);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
