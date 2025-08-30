import React, { useState } from "react";
import Header from "./Components/Home/Header";
import "./Homepage.css";
import bgImage from "./assets/university.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = async () => {
    if (!userMessage.trim()) return;

    const updatedHistory = [
      ...chatHistory,
      { sender: "user", message: userMessage },
    ];
    setChatHistory(updatedHistory);
    setUserMessage("");

    try {
      const res = await axios.post("http://localhost:10000/chat", {
        message: userMessage,
      });
      const botReply = res.data.reply || "Sorry, I couldn't understand that.";
      setChatHistory((prev) => [...prev, { sender: "bot", message: botReply }]);
    } catch (error) {
      setChatHistory((prev) => [
        ...prev,
        { sender: "bot", message: "Error reaching chatbot." },
      ]);
    }
  };

  return (
    <>
      <div className="app-container">
        <div
          className="background-blur"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        <div className="content-layer">
          <Header />

          {/* Hero Section */}
          <section className="hero-section text-center">
            <div className="container">
              <h1 className="hero-title">Welcome to IIIT Bhagalpur</h1>
              <p className="hero-subtitle">
                Fostering Innovation & Excellence in Technical Education
              </p>
              <Link to="/" className="btn btn-primary mt-3 px-4">
                Login
              </Link>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="fade-in">
            <div className="container">
              <div className="card-style">
                <h2 className="section-title">About Us</h2>
                <p className="section-text">
                  The Indian Institute of Information Technology Bhagalpur (IIIT
                  Bhagalpur) is an Institute of National Importance, established
                  to foster excellence in information technology and allied
                  disciplines...
                </p>
              </div>
            </div>
          </section>

          {/* Departments Section */}
          <section id="departments" className="fade-in-light">
            <div className="container">
              <h2 className="section-title">Departments</h2>
              <div className="carousel-container">
                <div className="carousel-card">
                  Computer Science and Engineering
                </div>
                <div className="carousel-card">
                  Electronics and Communication Engineering
                </div>
                <div className="carousel-card">Mathematics</div>
                <div className="carousel-card">Physics</div>
                <div className="carousel-card">Humanities & Social Sciences</div>
              </div>
            </div>
          </section>

          {/* Academics Section */}
          <section id="academics" className="fade-in">
            <div className="container">
              <div className="card-style">
                <h2 className="section-title">Academics</h2>
                <p className="section-text">
                  The academic structure at IIIT Bhagalpur is designed to foster
                  intellectual growth, critical thinking, and practical
                  application of knowledge...
                </p>
              </div>
            </div>
          </section>

          {/* Notices Section */}
          <section id="notices" className="fade-in-light">
            <div className="container">
              <h2 className="section-title">Notices</h2>
              <div className="notice-carousel">
                <div className="notice-card">
                  📢 Applications open for 2025 B.Tech admissions.
                </div>
                <div className="notice-card">
                  📅 Mid-semester exams from August 10 to 18.
                </div>
                <div className="notice-card">
                  💼 Campus placements start from September 1st.
                </div>
                <div className="notice-card">
                  🧪 Lab assessments to begin in the third week of August.
                </div>
                <div className="notice-card">
                  🛑 Hostel registration closes on July 25th.
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="fade-in">
            <div className="container">
              <h2 className="section-title text-center">Contact Us</h2>
              <div className="contact-form">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary px-4">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <footer className="footer">
            <div className="container text-center">
              <p>© {new Date().getFullYear()} IIIT Bhagalpur. All Rights Reserved.</p>
              <p className="footer-links">
                <a href="#about">About</a> | <a href="#departments">Departments</a> |{" "}
                <a href="#academics">Academics</a> | <a href="#notices">Notices</a> |{" "}
                <a href="#contact">Contact</a>
              </p>
            </div>
          </footer>
        </div>
      </div>

      {/* Chatbot */}
      <div className="chatbot-wrapper">
        <div className={`chat-popup ${chatOpen ? "open" : ""}`}>
          <div className="chat-header">
            <h4>Ask Manvian Bot </h4>
            <button className="close-btn" onClick={() => setChatOpen(false)}>
              ×
            </button>
          </div>
          <div className="chat-body" id="chat-body">
            {chatHistory.map((entry, index) => (
              <div key={index} className={`chat-message ${entry.sender}`}>
                {entry.message}
              </div>
            ))}
          </div>
          <div className="chat-input-area">
            <input
              type="text"
              value={userMessage}
              placeholder="Type your message..."
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
        <button className="chat-button" onClick={() => setChatOpen(!chatOpen)}>
          💬
        </button>
      </div>
    </>
  );
};

export default Homepage;
