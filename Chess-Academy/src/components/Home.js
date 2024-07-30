import React from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <div className="hero-section" >
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Elite Chess Academy</h1>
          <p className="hero-subtitle">
            Master the art of chess with our expert coaches and tailored courses.
          </p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Our Highlights</h2>
        <div className="highlight-container">
          <div className="highlight-paper">
            <h3 className="highlight-title">Professional Coaches</h3>
            <p className="highlight-description">
              Learn from grandmasters and experienced instructors who will guide you through our comprehensive courses.
            </p>
            <div className="icon-container">
              <i className="fas fa-chess"></i>
            </div>
          </div>
          <div className="highlight-paper">
            <h3 className="highlight-title">Comprehensive Courses</h3>
            <p className="highlight-description">
              Whether you're a beginner or an advanced player, our courses are designed to cater to your specific needs and help you improve your skills.
            </p>
            <div className="icon-container">
              <i className="fas fa-book-open"></i>
            </div>
          </div>
          <div className="highlight-paper">
            <h3 className="highlight-title">Online Tournaments</h3>
            <p className="highlight-description">
              Participate in regular tournaments and improve your skills by competing with other players from around the world.
            </p>
            <div className="icon-container">
              <i className="fas fa-trophy"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Our Mission</h2>
        <p className="mission-description">
          Our mission is to cultivate a deep love for chess and foster a community of enthusiastic learners. We strive to:
        </p>
        <ul className="mission-list">
          <li>
            <h3 className="mission-title">Enhance Strategic Thinking</h3>
            <p className="mission-content">
              Through chess, we teach our students to think ahead, plan strategically, and consider the consequences of their actions, skills that are invaluable both on and off the board.
            </p>
          </li>
          <li>
            <h3 className="mission-title">Promote Critical Analysis</h3>
            <p className="mission-content">
              We encourage our students to analyze their moves, reflect on their games, and learn from both victories and defeats, fostering a mindset of continuous improvement.
            </p>
          </li>
          <li>
            <h3 className="mission-title">Build Confidence and Patience</h3>
            <p className="mission-content">
              Chess is a game of patience and perseverance. By mastering chess, our students gain confidence in their abilities and learn the value of thoughtful decision-making.
            </p>
          </li>
        </ul>
      </div>

      <div className="section">
        <h2 className="section-title">Our Coaches</h2>
        <div className="coaches-container">
          <div className="coach-paper">
            <img className="coach-image" src="https://a.espncdn.com/photo/2022/0203/r969383_1296x729_16-9.jpg" alt="Coach 1" />
            <h3 className="coach-name">Coach 1</h3>
            <p className="coach-description">
              Grandmaster with 20 years of experience. Specializes in tactical play and has coached numerous national champions.
            </p>
          </div>
          <div className="coach-paper">
            <img className="coach-image" src="https://sc0.blr1.cdn.digitaloceanspaces.com/article/111756-lhrzaegtek-1548766147.jpg" alt="Coach 2" />
            <h3 className="coach-name">Coach 2</h3>
            <p className="coach-description">
              International Master with 15 years of experience. Focuses on strategic play and has developed several world-class players.
            </p>
          </div>
          <div className="coach-paper">
            <img className="coach-image3" src="https://blog.amphy.com/wp-content/uploads/2022/12/jose-raul-capablanca.jpeg" alt="Coach 3" />
            <h3 className="coach-name">Coach 3</h3>
            <p className="coach-description">
              FIDE Master with 10 years of experience. Known for his expertise in endgame play and has coached several state champions.
            </p>
          </div>
        </div>
      </div>
      <div className='btn1'>
      <Link to="/courses">
        <button className="join-btn">
          Join Now</button>
          </Link>
      </div>
      <section className="home-contact">
          <h1 className='gtc'><strong>Contact Us</strong></h1>
          <p className='p1q'>Have questions or want to learn more about our programs? Our team is here to assist you. Feel free to reach out to us through the following channels:</p>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email Us</h3>
              <p>Email: <a href="mailto:elitechessacademy24@gmail.com">elitechessacademy24@gmail.com</a></p>
            </div>
            <div className="contact-item">
              <h3>Call Us</h3>
              <p>Phone: <a href="tel:+919000190001">+91 90001 90001</a></p>
            </div>
            <div className="contact-item">
              <h3>Follow Us</h3>
              <p>Stay updated with our latest news and events on social media:</p>
              <div className="social-links">
                <a href="https://facebook.com/elitechessacademy" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com/elitechessacademy" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/elitechessacademy" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            Elite Chess Academy | Copyright &copy; 2024
          </p>
          <ul className="footer-list">
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </footer>
      
    </>
  );
};

export default Home;