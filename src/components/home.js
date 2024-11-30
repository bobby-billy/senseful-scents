import React from "react";

function Home() {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/home-bg1.jpg)`,
        height: "100vh",  // Full viewport height
        backgroundSize: "cover",  // Ensure the image covers the full area
        backgroundPosition: "center",  // Center the image
        color: "white",  // Make text visible on the background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/images/logo1.png`}
        alt="Senseful Scents Logo"
        style={{ width: "200px", marginBottom: "20px" }}  // Adjust logo size
      />
      <h2>Welcome to Senseful Scents</h2>
      <p>Explore the power of scent and find your perfect fragrance here!</p>
    </div>
  );
}

export default Home;
