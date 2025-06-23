import React, { useState, useEffect } from 'react'

const About = () => {
  const [activeTab, setActiveTab] = useState('bio')
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState('')
  
  const fullText = "Creating innovative solutions that make a difference"
  
  useEffect(() => {
    setIsVisible(true)
    let index = 0
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  const tabs = [
    {
      id: 'bio',
      label: 'Bio',
      icon: 'fas fa-user',
      content: {
        title: "Software Engineer & Innovator",
        text: "I'm a software engineer who believes that great technology should be accessible and solve real problems for real people. My approach to development centers on user experience and accessibility, ensuring that every application I build genuinely addresses user needs. I love creating software that makes a meaningful difference in people's lives."
      }
    },
    {
      id: 'journey',
      label: 'Journey',
      icon: 'fas fa-rocket',
      content: {
        title: "From Curiosity to Impact",
        text: "I'm driven by curiosity and love diving into complex challenges, from developing machine learning models to building full-stack applications. I won the Congressional App Challenge with my Ping app, a real-time emergency communication platform that helps flood victims and first responders coordinate during disasters. The project showcases my passion for user-centered design and building systems that work when they're needed most."
      }
    },
    {
      id: 'current',
      label: 'Current',
      icon: 'fas fa-laptop-code',
      content: {
        title: "Research & Innovation",
        text: "Currently, I work as a research assistant at Northeastern's sustainability incubator, where I develop internal software solutions and apply machine learning techniques to sustainability challenges. I also have experience developing BERT models for natural language processing applications. It's exciting to combine my technical expertise with research that focuses on environmental impact and sustainable innovation."
      }
    },
    {
      id: 'passion',
      label: 'Passion',
      icon: 'fas fa-heart',
      content: {
        title: "Building for Tomorrow",
        text: "I'm always looking for opportunities to use my skills in ways that make a positive impact on communities and push the boundaries of what's possible with technology. Getting recognized with the Change Maker Award was incredibly rewarding and reinforced why I love building software that creates real value for users."
      }
    }
  ]

  const skills = [
    { name: 'Full-Stack Development', level: 95, color: '#ff6b35' },
    { name: 'Machine Learning/AI', level: 88, color: '#4ecdc4' },
    { name: 'Product Design', level: 85, color: '#45b7d1' },
    { name: 'Research & Analytics', level: 90, color: '#96ceb4' },
    { name: 'Team Leadership', level: 82, color: '#ffeaa7' }
  ]

  const achievements = [
    { icon: 'fas fa-trophy', title: 'Congressional App Challenge Winner', description: '2021 Winner with Ping app' },
    { icon: 'fas fa-medal', title: 'Change Maker Award', description: 'Recognized for community impact' },
    { icon: 'fas fa-users', title: '275+ App Users', description: 'Recruited across India & US' },
    { icon: 'fas fa-chart-line', title: '1.4M+ YouTube Views', description: 'Tech review content creator' }
  ]

  return (
    <div>
      <section id="about" className={`about-section ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          {/* Header */}
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-4 fw-bold about-title">
                About Me
              </h2>
              <div className="typing-container">
                <p className="lead typing-text">
                  {typedText}
                  <span className="cursor">|</span>
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="row align-items-center mb-5">
            {/* Profile Image */}
            <div className="col-lg-4 text-center mb-4 mb-lg-0">
              <div className="profile-container">
                <div className="profile-wrapper">
                  <div className="profile-image">
                    <div className="profile-placeholder">
                      <i className="fas fa-user profile-icon"></i>
                    </div>
                  </div>
                  <div className="floating-icons">
                    <div className="floating-icon icon-1">
                      <i className="fas fa-code"></i>
                    </div>
                    <div className="floating-icon icon-2">
                      <i className="fas fa-brain"></i>
                    </div>
                    <div className="floating-icon icon-3">
                      <i className="fas fa-rocket"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Tabs */}
            <div className="col-lg-8">
              <div className="content-tabs">
                {/* Tab Navigation */}
                <div className="tab-nav">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <i className={tab.icon}></i>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="tab-content">
                  {tabs.map((tab) => (
                    <div
                      key={tab.id}
                      className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}
                    >
                      <h4 className="content-title">{tab.content.title}</h4>
                      <p className="content-text">{tab.content.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="row">
            <div className="col-12">
              <h3 className="section-subtitle text-center mb-4">Key Achievements</h3>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-icon">
                      <i className={achievement.icon}></i>
                    </div>
                    <h5 className="achievement-title">{achievement.title}</h5>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-section {
          padding: 100px 0;
          background: #ffffff;
          color: #333333;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease;
        }
        
        .about-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .about-title {
          background: linear-gradient(45deg, #ff6b35, #f7931e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 2rem;
        }
        
        .typing-container {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .typing-text {
          font-size: 1.2rem;
          font-weight: 300;
          margin: 0;
          color: #666666;
        }
        
        .cursor {
          animation: blink 1s infinite;
          color: #ff6b35;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .profile-container {
          position: relative;
          display: inline-block;
        }
        
        .profile-wrapper {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 0 auto;
        }
        
        .profile-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ff6b35, #f7931e);
          padding: 5px;
          animation: pulse 2s infinite;
        }
        
        .profile-placeholder {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(255, 107, 53, 0.1);
          border: 2px solid rgba(255, 107, 53, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .profile-icon {
          font-size: 4rem;
          color: #ff6b35;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .floating-icons {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .floating-icon {
          position: absolute;
          width: 40px;
          height: 40px;
          background: rgba(255, 107, 53, 0.1);
          border: 2px solid rgba(255, 107, 53, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff6b35;
          font-size: 1rem;
          animation: float 3s ease-in-out infinite;
        }
        
        .icon-1 {
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }
        
        .icon-2 {
          bottom: 20%;
          left: 5%;
          animation-delay: 1s;
        }
        
        .icon-3 {
          top: 60%;
          right: 5%;
          animation-delay: 2s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .content-tabs {
          background: #f8f9fa;
          border-radius: 20px;
          padding: 2rem;
          border: 2px solid rgba(255, 107, 53, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .tab-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
          justify-content: center;
        }
        
        .tab-btn {
          background: #ffffff;
          border: 2px solid #e9ecef;
          color: #333333;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .tab-btn:hover {
          background: #fff5f2;
          border-color: #ff6b35;
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        }
        
        .tab-btn.active {
          background: linear-gradient(45deg, #ff6b35, #f7931e);
          border-color: #ff6b35;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
        }
        
        .tab-content {
          min-height: 200px;
        }
        
        .tab-pane {
          opacity: 0;
          transform: translateX(20px);
          transition: all 0.3s ease;
          display: none;
        }
        
        .tab-pane.active {
          opacity: 1;
          transform: translateX(0);
          display: block;
        }
        
        .content-title {
          color: #ff6b35;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        .content-text {
          line-height: 1.8;
          font-size: 1.1rem;
          margin: 0;
          color: #555555;
        }
        
        .section-subtitle {
          color: #ff6b35;
          font-weight: 600;
          margin-bottom: 3rem;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .skill-item {
          background: #ffffff;
          padding: 1.5rem;
          border-radius: 15px;
          border: 2px solid rgba(255, 107, 53, 0.1);
          transition: transform 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .skill-item:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 107, 53, 0.3);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .skill-name {
          font-weight: 600;
          font-size: 1.1rem;
          color: #333333;
        }
        
        .skill-percentage {
          color: #ff6b35;
          font-weight: 600;
        }
        
        .skill-bar {
          height: 8px;
          background: #e9ecef;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .skill-progress {
          height: 100%;
          border-radius: 4px;
          transition: width 2s ease;
          animation: skillLoad 2s ease-in-out;
        }
        
        @keyframes skillLoad {
          0% { width: 0%; }
        }
        
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .achievement-card {
          background: #ffffff;
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          border: 2px solid rgba(255, 107, 53, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .achievement-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: rgba(255, 107, 53, 0.3);
        }
        
        .achievement-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #ff6b35, #f7931e);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          font-size: 1.5rem;
          color: white;
        }
        
        .achievement-title {
          color: #ff6b35;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .achievement-description {
          font-size: 0.9rem;
          color: #666666;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .about-section {
            padding: 60px 0;
          }
          
          .profile-wrapper {
            width: 150px;
            height: 150px;
          }
          
          .profile-image {
            width: 150px;
            height: 150px;
          }
          
          .profile-icon {
            font-size: 3rem;
          }
          
          .content-tabs {
            padding: 1.5rem;
          }
          
          .tab-nav {
            justify-content: center;
          }
          
          .tab-btn {
            padding: 0.6rem 1rem;
            font-size: 0.8rem;
          }
          
          .skills-grid {
            grid-template-columns: 1fr;
          }
          
          .achievements-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }
      `}</style>
    </div>
  )
}

export default About