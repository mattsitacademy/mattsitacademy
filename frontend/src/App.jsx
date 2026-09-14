import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Connecting to backend...");

  useEffect(() => {
    fetch("http://13.234.213.88:5000/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Backend Response:", data);
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Backend connection error:", error);
        setMessage("❌ Backend is not connected");
      });
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MattsITAcademy</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>
            Learn <span>DevOps & Cloud</span>
            <br />
            With MattsITAcademy
          </h1>

          <p>
            Learn Docker, Kubernetes, Linux, AWS, Azure,
            DevOps and Cloud Computing with practical tutorials.
          </p>

          <button>Start Learning</button>

          {/* Backend Connection */}
          <div className="backend-status">
            <h3>Backend Status</h3>
            <p>{message}</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses" id="courses">
        <h2>Popular Courses</h2>

        <div className="course-container">
          <div className="course-card">
            <h3>🐳 Docker</h3>
            <p>Learn Docker from beginner to advanced level.</p>
          </div>

          <div className="course-card">
            <h3>☸️ Kubernetes</h3>
            <p>Learn Kubernetes with practical examples.</p>
          </div>

          <div className="course-card">
            <h3>☁️ AWS Cloud</h3>
            <p>Learn AWS cloud services step by step.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <h2>About MattsITAcademy</h2>

        <p>
          MattsITAcademy provides practical tutorials and training
          for DevOps, Cloud Computing, Linux and modern technologies.
        </p>
      </section>

      {/* Footer */}
      <footer id="contact">
        <p>© 2026 MattsITAcademy | Learn. Practice. Grow.</p>
      </footer>
    </>
  );
}

export default App;
