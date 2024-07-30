import React from 'react';
import './Courses.css';

const Courses = () => {
  const reviews = [
    {
      name: "Alex T.",
      content: "This course was perfect for me as a beginner! The lessons were clear and engaging.",
      rating: 5,
      avatar: "https://w0.peakpx.com/wallpaper/30/726/HD-wallpaper-is-gary-kasparov-playing-chess-in-this-by-i-dan-calinescu-medium-chess-player.jpg"
    },
    {
      name: "Jamie L.",
      content: "I loved the interactive exercises! They really helped me understand the game better.",
      rating: 4,
      avatar: "https://www.shutterstock.com/image-photo/pensive-chess-player-thinking-about-260nw-612955718.jpg"
    },
    {
      name: "Sam R.",
      content: "The tactical lessons were a game changer for me. Highly recommend!",
      rating: 5,
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLFV_Y-YCiRXdUS7Vf1Dfb2ljKNz8Xaw4AF8DRUnF0fWYwCSqv6q_d1LbH5c9kpkNyBqQ&usqp=CAU"
    },
    {
      name: "Casey M.",
      content: "Great course! I learned so much about openings and strategies.",
      rating: 4,
      avatar: "https://femina.wwmindia.com/content/2021/sep/women-thumb1632797644.jpg"
    },
    {
      name: "Jordan P.",
      content: "The advanced strategies taught here are incredible. I feel like a new player!",
      rating: 5,
      avatar: "https://as1.ftcdn.net/v2/jpg/02/32/97/38/1000_F_232973825_8UbjrdswWhZky74qlLtn0ojR5sy1o5km.jpg"
    },
    {
      name: "Taylor W.",
      content: "The insights from the coaches are invaluable. I've improved tremendously!",
      rating: 5,
      avatar: "https://www.shutterstock.com/image-photo/portrait-handsome-teenage-boy-hoodie-260nw-1663803025.jpg"
    },
    {
      name: "Morgan S.",
      content: "An excellent course! I appreciate the depth of knowledge shared by the instructors.",
      rating: 5,
      avatar: "https://tse4.mm.bing.net/th?id=OIP.vXcCPr4z_OBPO6YJHrzT0wHaHa&pid=Api&P=0&h=220"
    },
    {
      name: "Johnson R.",
      content: "The community aspect of the course is fantastic. I made great friends while learning!",
      rating: 5,
      avatar: "https://www.shutterstock.com/image-photo/young-woman-studying-260nw-1781234567.jpg"
    },
    {
      name: "Chris K.",
      content: "The course content is well-structured and easy to follow. Highly recommended!",
      rating: 4,
      avatar: "https://i.pinimg.com/originals/93/d4/3c/93d43c25b863001ad11b70c3500c0e77.jpg"
    },
    {
      name: "Alexis P.",
      content: "I have improved my game significantly. The strategies taught are top-notch!",
      rating: 5,
      avatar: "https://i.pinimg.com/originals/f2/92/20/f29220ab81d6e9ae068d5cc8409aad33.jpg"
    },
    {
      name: "Jessie T.",
      content: "The instructors are very knowledgeable and supportive. A great learning environment!",
      rating: 5,
      avatar: "https://oldnavy.gap.com/webcontent/0022/703/476/cn22703476.jpg"
    },
    {
      name: "Tom C.",
      content: "I enjoyed every lesson! The practice sessions were especially helpful.",
      rating: 4,
      avatar: "https://oldnavy.gap.com/webcontent/0014/732/822/cn14732822.jpg"
    },
    {
      name: "Ethan S.",
      content: "The course structure is fantastic. I love how each lesson builds upon the previous ones.",
      rating: 5,
      avatar: "https://tse2.mm.bing.net/th?id=OIP.XTmBRnUFZHU60qOmHG7KWwHaHa&pid=Api&P=0&h=220"
    },
    {
      name: "Ava M.",
      content: "The instructors are incredibly knowledgeable and passionate about chess. I'm learning so much!",
      rating: 4,
      avatar: "https://i.pinimg.com/originals/59/28/76/5928761c6aec7eda50accab6176f365e.jpg"
    },
    {
      name: "Lucas T.",
      content: "The course has exceeded my expectations. I'm making rapid progress and enjoying every minute!",
      rating: 5,
      avatar: "https://tse4.mm.bing.net/th?id=OIP.fKPs8qJeagakwYni50fUawHaHa&pid=Api&P=0&h=220"
    },
  ];


  return (
    <div className="courses-container">
      <h2>Elevate Your Chess Game</h2>
      <p>
        At Elite Chess Academy, we offer a range of courses tailored to your skill level and goals. Whether you're a beginner looking to learn the fundamentals or an experienced player seeking to refine your strategies, our comprehensive training will help you achieve your chess aspirations.
      </p>

      <div className="courses-grid">
        <div className="course-card">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.uZh1wyw-SxCiLxZjn4hegQHaDL&pid=Api&P=0&h=220"
            alt="Beginner Course"
            className="course-image"
          />
          <div className="course-details">
            <h3>Beginner Course</h3>
            <div className="course-rating">
              <span>
                <i className="fas fa-users"></i>
                1,200 Users
              </span>
              <span>
                <i className="fas fa-star"></i>
                4.8 (150 Reviews)
              </span>
            </div>
            <p>
              Dive into the world of chess with our beginner course. Learn the rules, piece movements, and essential tactics to lay a solid foundation for your chess journey.
            </p>
            <ul className="course-features">
              <li><i className="fas fa-check"></i> Interactive lessons</li>
              <li><i className="fas fa-check"></i> Beginner-friendly explanations</li>
              <li><i className="fas fa-check"></i> Practice exercises</li>
            </ul>
            <a href="/beginner-course" className="cta-button01">Start Beginner Course</a>
          </div>
        </div>

        <div className="course-card">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.l_Eo8dlOozX8zb5Jld1JawHaEK&pid=Api&P=0&h=220"
            alt="Intermediate Course"
            className="course-image"
          />
          <div className="course-details">
            <h3>Intermediate Course</h3>
            <div className="course-rating">
              <span>
                <i className="fas fa-users"></i>
                900 Users
              </span>
              <span>
                <i className="fas fa-star"></i>
                4.6 (100 Reviews)
              </span>
            </div>
            <p>
              Take your chess skills to the next level with our intermediate course. Explore advanced strategies, tactics, and openings to outmaneuver your opponents.
            </p>
            <ul className="course-features">
              <li><i className="fas fa-check"></i> Comprehensive strategy lessons</li>
              <li><i className="fas fa-check"></i> Tactical pattern recognition</li>
              <li><i className="fas fa-check"></i> Personalized feedback</li>
            </ul>
            <a href="/intermediate-course" className="cta-button01">Start Intermediate Course</a>
          </div>
        </div>

        <div className="course-card">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.I1W1hQ-Y6jnt1g05ng9YzgHaEo&pid=Api&P=0&h=220"
            alt="Advanced Course"
            className="course-image"
          />
          <div className="course-details">
            <h3>Advanced Course</h3>
            <div className="course-rating">
              <span>
                <i className="fas fa-users"></i>
                500 Users
              </span>
              <span>
                <i className="fas fa-star"></i>
                4.9 (200 Reviews)
              </span>
            </div>
            <p>
              Elevate your game to the highest level with our advanced course. Learn from expert coaches and study the techniques used by grandmasters to dominate the board.
            </p>
            <ul className="course-features">
              <li><i className="fas fa-check"></i> Grandmaster-level insights</li>
              <li><i className="fas fa-check"></i> Endgame mastery</li>
              <li><i className="fas fa-check"></i> Personalized training plans</li>
            </ul>
            <a href="/advanced-course" className="cta-button01">Start Advanced Course</a>
          </div>
        </div>
      </div>

      <div className="reviews-section">
        <h2>User Reviews</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-container" key={index}>
              <div className="review-header">
                <img src={review.avatar} alt="User Avatar" className="review-avatar" />
                <span className="review-name">{review.name}</span>
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                </div>
              </div>
              <p className="review-content">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;