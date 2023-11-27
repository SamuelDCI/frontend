let BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://backend-server-frje.onrender.com";

export default BASE_URL;
