const API_BASE_URL = "http://localhost:5001/api"; // Backend URL
export const login = (credentials) =>
    fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });
