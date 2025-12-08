"use client";
import React from "react";

export default function Dashboard() {
  const stats = [
    { title: "Total Users", value: 1240 },
    { title: "Active Users", value: 320 },
    { title: "New Signups", value: 58 },
    { title: "Revenue (Today)", value: "$1,250" },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Dashboard</h1>

      <div style={styles.grid}>
        {stats.map((item, index) => (
          <div key={index} style={styles.card}>
            <h2>{item.title}</h2>
            <p style={styles.value}>{item.value}</p>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <h2>Recent Activity</h2>
        <ul style={styles.list}>
          <li>User Abhishek signed up ✔️</li>
          <li>3 new support tickets opened 🎫</li>
          <li>Server uptime: 99.99% 🚀</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial",
    background: "#f5f7ff",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  value: {
    marginTop: "10px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#4f46e5",
  },
  section: {
    marginTop: "40px",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
  },
  list: {
    marginTop: "10px",
    lineHeight: "28px",
  },
};
