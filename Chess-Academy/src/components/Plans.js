import React from 'react';
import './Plans.css';

const Plans = () => {
  return (
    <div className="plans">
       
      
      <div className="plan-list">
        <div className="plan-item">
          <div className="plan-header">
            
            <h3><strong>Basic Plan</strong></h3>
            <p>Price: <strong>$20/month</strong></p>
          </div>
          <div className="plan-details">
            <p>Perfect for beginners looking to start their chess journey.</p>
            <ul>
              <li>✔ Access to beginner tutorials</li>
              <li>✔ Downloadable resources</li>
              <li>✔ Community forum access</li>
              <li>✔ Monthly newsletters with tips</li>
              <li>✔ 10% discount on merchandise</li>
              <li>✔ Priority support</li>
            </ul>
          </div>
          <button className="cta-button08">Choose Basic</button>
        </div>
        <div className="plan-item">
          <div className="plan-header">
            <h3><strong>Standard Plan</strong></h3>
            <p>Price: <strong>$30/month</strong></p>
          </div>
          <div className="plan-details">
            <p>Ideal for intermediate players looking to enhance their skills.</p>
            <ul>
              <li>✔ Everything in Basic Plan</li>
              <li>✔ Access to intermediate tutorials</li>
              <li>✔ Monthly live Q&A sessions</li>
              <li>✔ Personalized training sessions</li>
              <li>✔ 15% discount on merchandise</li>
              <li>✔ Priority support with faster response times</li>
            </ul>
          </div>
          <button className="cta-button09">Choose Standard</button>
        </div>
        <div className="plan-item">
          <div className="plan-header">
            <h3><strong>Premium Plan</strong></h3>
            <p>Price: <strong>$40/month</strong></p>
          </div>
          <div className="plan-details">
            <p>Comprehensive access for serious players wanting to excel.</p>
            <ul>
              <li>✔ Everything in Standard Plan</li>
              <li>✔ Access to all courses</li>
              <li>✔ Online classes with experts</li>
              <li>✔ Discounts on tournament participation</li>
              <li>✔ 20% discount on merchandise</li>
              <li>✔ Priority support with dedicated account manager</li>
            </ul>
          </div>
          <button className="cta-button10">Choose Premium</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;