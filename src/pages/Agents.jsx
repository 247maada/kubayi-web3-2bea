import React from "react";

export default function Agents() {
  const agents = [
    { name: "MDI", goal: "$1000/month", status: "Training" },
    { name: "LES", goal: "$1000/month", status: "Active" },
    { name: "KIDIS", goal: "$1000/month", status: "Monitoring" },
  ];

  return (
    <div className="agents-page">
      <h1>AI Agents Dashboard</h1>
      <p>Meet our BuildMinM support agents helping manage and grow the hub.</p>
      <div className="agent-list">
        {agents.map((a) => (
          <div key={a.name} className="agent-card">
            <h3>{a.name}</h3>
            <p>Goal: {a.goal}</p>
            <p>Status: {a.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
    }
