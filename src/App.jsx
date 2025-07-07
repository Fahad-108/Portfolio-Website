import React, { useEffect } from "react";
import "./style.css";
const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/script.js"; // path from public folder
    script.async = true;
    document.body.appendChild(script);

    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header>
        <a href="#" className="logo">
          Portfolio
        </a>
        <div id="menu-icon">≡</div>
        <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="particle-container"></div>
        <div className="home-content">
          <h1>
            Hi, I'm <span>Muhammad Fahad Raza</span>
          </h1>
          <div className="text-animate">
            <h3>Full-Stack Developer</h3>
          </div>
          <p>
            I'm a passionate Web developer specializing in creating modern web
            pages with clean architecture and best practices. With expertise in
            both front-end and back-end technologies, I build scalable and
            maintainable website solutions.
          </p>
          <div className="social-links">
            <a href="https://github.com/Fahad-108">
              <span className="icon">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/fahad-raza-779524372/">
              <span className="icon">LinkedIn</span>
            </a>
            <a href="mailto:fahiiraza8@gmail.com">
              <span className="icon">Email</span>
            </a>
          </div>
          <a href="#contact" className="btn">
            Let's Connect
          </a>
        </div>

        <div className="home-img">
          <div className="glowing-circle">
            <div className="image">
              <img src="/image.jpg" alt="Fahad Raza" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <div className="about-content">
          <div className="about-img">
            <img src="/img.webp" alt="Working on code" />
          </div>
          <div className="about-text">
            <h3>Passionate Full-Stack Developer</h3>
            <p>
              With a strong foundation in React, JavaScript and Tailwind CSS , I develop
              robust and scalable websites that solve real-world problems. My
              experience spans across various domains of websites development,
              from designing clean architectures to implementing modern UI/UX
              patterns.
            </p>
            <p>
              I'm dedicated to continuous learning and staying updated with the
              latest industry trends and technologies. My approach to
              development focuses on writing clean, maintainable code while
              delivering exceptional user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2 className="heading">
          My <span>Skills</span>
        </h2>
        <div className="skills-container">
          <div className="skills-box">
            <h3>Front-End Development</h3>
            <p>
              Building responsive and interactive user interfaces using modern
              technologies.
            </p>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React.js</span>
            </div>
          </div>

          <div className="skills-box">
            <h3>Back-End Development</h3>
            <p>Creating robust and scalable backend systems with RESTful APIs.</p>
            <div className="skills-list">
              <span>Express.js</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>MySQL</span>
            </div>
          </div>

          <div className="skills-box">
            <h3>Full-Stack Development</h3>
            <p>
              End-to-end development with full control over both client and
              server sides.
            </p>
            <div className="skills-list">
              <span>MERN Stack</span>
              <span>API Integration</span>
              <span>JWT Auth</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="skills-box">
            <h3>Tools & Collaboration</h3>
            <p>
              Using tools and workflows that support team development and
              version control.
            </p>
            <div className="skills-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Postman</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2 className="heading">
          Web <span>Projects</span>
        </h2>
        <div className="projects-container">
          <div className="projects-box">
            <div className="projects-layer">
              <h4>MiniXpress</h4>
              <p>
                MiniXpress is a React app that offers many features in one place. It includes a task manager, games, and useful tools. It supports dark/light mode.
              </p>
            </div>
          </div>

          <div className="projects-box">
            <div className="projects-layer">
              <h4>Portfolio Website</h4>
              <p>
                Personal portfolio website built using HTML, CSS, and JavaScript
                showcasing my web projects.
              </p>
            </div>
          </div>

          <div className="projects-box">
            <div className="projects-layer">
              <h4>To-Do App</h4>
              <p>
                Task management app using React and localStorage with smooth
                UI/UX design.
              </p>
            </div>
          </div>

          <div className="projects-box">
            <div className="projects-layer">
              <h4>Instagram Clone UI</h4>
              <p>
               Designed a responsive login and signup page using HTML and CSS, inspired by Instagram’s interface and styling.
              </p>
            </div>
          </div>


          <div className="projects-box">
            <div className="projects-layer">
              <h4>TicketXpress</h4>
              <p>
                A responsive website built with HTML, CSS, and JavaScript featuring booking, login/signup pages, and GSAP-powered animations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-box">
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
          </div>
          <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-text">
          <p>&copy; 2025 Muhammad Fahad Raza | All Rights Reserved</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home">
            <span>↑</span>
          </a>
        </div>
      </footer>
    </>
  );
};

export default App;
