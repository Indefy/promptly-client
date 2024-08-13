import React from "react";
import useFetch from "../hooks/useFetch";

function Dashboard() {
  const { data, error, loading } = useFetch(
    "http://localhost:5001/.com/data"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Dashboard;
