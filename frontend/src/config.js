// export const BACKEND_URL = "http://localhost:8080";
export const BACKEND_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "https://your-backend-url.com"; // Replace with your deployed backend URL

