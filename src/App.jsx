import React from "react";
import "./App.css";
import { motion } from "framer-motion";

// Fade In Animation Settings
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

function App() {
  return (
    <div className="app">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      {/* Hero Section */}
      <header className="hero">
        <motion.div
          className="glass-card"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0}
        >
          <img
            src="Profile.jpg" // Profile image path
            alt="Dharaneesh"
            className="profile-pic"
          />
          <h1>Dharaneesh A N</h1>
          <p>VR/AR & UI/UX Developer</p>
          <div className="social-icons">
            <a href="https://github.com/DharaneeshAN">🐱</a>
            <a href="https://www.linkedin.com/in/dharaneesh-a-n-b43570259/">🔗</a>
            <a href="dharaneeshdharaneesh417@gmail.com">📧</a>
          </div>
          <div>L</div>
          <a href="#contact" className="cta-button">
            Contact Me
          </a>
        </motion.div>
      </header>

      {/* About Section */}
      <motion.section
        className="glass-section"
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={1}
      >
        <h2>About Me</h2>
        <p>
        Aspiring Software Developer with a Passion for UI/UX and AR/VR Design. Enthusiastic About Creating Immersive and
        User-Centric Experiences While Continuously Improving Coding Skills and Collaborating with Innovative Teams.
        </p>
      </motion.section>

      {/* Projects Section */}
      <section className="glass-section">
        <h2>Projects</h2>
        <div className="project-cards">
          {[
            {
              title: "Jump Over Game",
              description: "Jump Over is an exciting and engaging puzzle-platformer game where players must navigate a character through various obstacles by making precise jumps. The main objective is to leap over barriers, gaps, or other hurdles to reach the goal while collecting points or rewards along the way.",
              imgSrc: "s1.jpg", // Path to project image
            },
            {
              title: "AR Anatomy Scanner | Unity",
              description: "Developed an AR/VR project using Unity for school students, enabling object scanning to visualize anatomical structures and enhance learning through interactive 3D models",
              imgSrc: "s2.jpeg", // Path to project image
            },
            {
              title: "AR Game | Unity",
              description: "Developed an interactive AR/VR Talking Tom game using Unity and C#, allowing users to engage with a virtual pet in an immersive environment.",
              imgSrc: "s3.jpeg", // Path to project image
            },
            {
              title: "Fitness Tracker | MERN Stack",
              description: "Developed a full-stack fitness tracker website using MongoDB, Express.js, React, and Node.js, enabling users to log workouts, track progress, and manage fitness goals efficiently.",
              imgSrc: "s4.jpeg", // Path to project image
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              className="project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={i + 2}
            >
              <img
                src={project.imgSrc}
                alt={project.title}
                className="project-image"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <motion.section
        className="glass-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={5}
      >
        <h2>Skills</h2>
        <div className="skill-tags">
          {[
            "Blender",
            "Unity",
            "Figma",
            "Adobe Illustrator",
            "Adobe Photoshop",
            "Aftereffects",
            "Vuforia/AR Kit/AR Core",
            "C#",
            "HTML",
            "CSS",
          ].map((skill, idx) => (
            <motion.span
              key={idx}
              custom={idx}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="glass-section contact"
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={6}
      >
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" />
          <button type="submit">Send</button>
        </form>
      </motion.section>

      <footer>
        © {new Date().getFullYear()} Dharaneesh — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
