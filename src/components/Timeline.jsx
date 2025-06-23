import React from 'react'

const Timeline = () => {
  const timelineData = [
    {
      year: "2025",
      title: "Co-Founder at NEMA",
      period: "May 2025 - Present",
      type: "Leadership",
      description: "Co-founded NEMA, focusing on innovative solutions and entrepreneurial ventures.",
      icon: "fas fa-rocket"
    },
    {
      year: "2025",
      title: "Technical Research Assistant",
      period: "Jan 2025 - Present",
      type: "Research",
      company: "Northeastern University",
      description: "Lead sustainability research and develop AI-driven solutions. Engineered BERT models with PyTorch to assess university investments, reducing manual analysis time from two months to five minutes.",
      achievements: [
        "Automated faculty sustainability research classification using ML",
        "Integrated BeautifulSoup, Selenium, SCOPUS API, and Hugging Face models",
        "Optimized research efficiency through data scraping and machine learning"
      ],
      icon: "fas fa-brain"
    },
    {
      year: "2024",
      title: "Product Designer",
      period: "Aug 2024 - Present",
      type: "Design",
      company: "Code4Community",
      description: "Guide product team vision and execution for Boston non-profit organizations. Create wireframes, design products, and refine MVPs through user testing.",
      achievements: [
        "Partner with Boston nonprofits for user-centric digital solutions",
        "Prioritize accessibility and user engagement in designs",
        "Ensure product alignment with nonprofit goals and user needs"
      ],
      icon: "fas fa-palette"
    },
    {
      year: "2024",
      title: "UX Design Intern",
      period: "Jun 2024 - Aug 2024",
      type: "Internship",
      company: "Anonymously Yours Foundation",
      location: "Seattle, WA",
      description: "Redesigned non-profit event management platform, driving significant improvements in user satisfaction and operational efficiency.",
      achievements: [
        "Identified critical user pain points through comprehensive interviews",
        "Delivered high-fidelity Figma prototype with drag-and-drop tables",
        "Integrated customizable dashboards and AI chatbot features"
      ],
      icon: "fas fa-users"
    },
    {
      year: "2024",
      title: "Software Engineer for TUNUL",
      period: "Jan 2024 - May 2024",
      type: "Engineering",
      company: "Oasis at Northeastern",
      description: "Built mapping application using Dijkstra's algorithm to navigate Northeastern's tunnel system. Led team of four developers.",
      achievements: [
        "Attracted 500+ students on launch day",
        "Gathered 1,245 survey responses for user-centered design",
        "Implemented step-by-step directions based on user preference (75%)"
      ],
      icon: "fas fa-map"
    },
    {
      year: "2022",
      title: "Biostatistics Intern",
      period: "Jun 2022 - Aug 2022",
      type: "Research",
      company: "Harvard T.H. Chan School of Public Health",
      description: "Developed bioinformatics pipeline for pancreatic cancer research using Python and performed differential analysis on genomic networks.",
      achievements: [
        "Streamlined data processes for genetic driver identification",
        "Built relationships with lead researchers in Biostatistics Department",
        "Utilized PAAD dataset to test new genomic data analysis methods"
      ],
      icon: "fas fa-dna"
    },
    {
      year: "2021",
      title: "Ping App - Congressional App Challenge Winner",
      period: "2020 - 2021",
      type: "Achievement",
      description: "Designed flood disaster management app that won the 2021 Congressional App Challenge. Centralized communications between flood victims and first responders.",
      achievements: [
        "Won Rep. Ayanna Pressley's Congressional App Challenge",
        "Recruited 250+ users from India and 25+ from United States",
        "Prevented misinformation spread through crowdsourced approach"
      ],
      icon: "fas fa-trophy"
    },
    {
      year: "2020",
      title: "Volunteer Developer & Project Manager",
      period: "2020",
      type: "Volunteer",
      company: "Interns 4-Good",
      description: "Led team of five to create mobile app for Love-in-Motion nonprofit. Served as both front-end developer and project manager.",
      achievements: [
        "Completed project in under three months",
        "Created engaging llama mascot game for user education",
        "Improved user retention by implementing direct payment option"
      ],
      icon: "fas fa-heart"
    },
    {
      year: "2018",
      title: "YouTube Content Creator",
      period: "Apr 2018 - Present",
      type: "Entrepreneurship",
      company: "Techno Review Channel",
      description: "Built successful tech review channel with substantial following and revenue. Cultivated relationships with 30+ sponsors and 120+ companies.",
      achievements: [
        "3,670+ subscribers, 1.4M+ total views, $3,400+ revenue",
        "25+ sponsored products worth $2,500+",
        "212K+ views on most popular video"
      ],
      icon: "fas fa-video"
    }
  ]

  const getTypeColor = (type) => {
    const colors = {
      'Leadership': 'bg-primary',
      'Research': 'bg-success',
      'Design': 'bg-info',
      'Engineering': 'bg-warning',
      'Internship': 'bg-secondary',
      'Achievement': 'bg-danger',
      'Volunteer': 'bg-light text-dark',
      'Entrepreneurship': 'bg-dark'
    }
    return colors[type] || 'bg-primary'
  }

  return (
    <section id="timeline" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold orange-accent" data-aos="fade-up">
              Professional Timeline
            </h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">
              A journey through my professional experiences and achievements
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="timeline-container position-relative">
              
              <div className="timeline-line position-absolute start-50 translate-middle-x bg-light-orange" style={{width: '4px', height: '100%', top: 0}}></div>
              
              {timelineData.map((item, index) => (
                <div 
                  key={index} 
                  className={`timeline-item d-flex mb-5 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className={`timeline-content ${index % 2 === 0 ? 'me-4' : 'ms-4'}`} style={{flex: '0 0 45%'}}>
                    <div className="card shadow-sm h-100">
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <span className={`badge ${getTypeColor(item.type)} px-3 py-2`}>
                            {item.type}
                          </span>
                          <small className="text-muted fw-bold">{item.period}</small>
                        </div>
                        
                        <h5 className="orange-accent mb-2">{item.title}</h5>
                        {item.company && (
                          <p className="text-muted mb-2 fw-semibold">
                            {item.company}
                            {item.location && <span className="ms-2">• {item.location}</span>}
                          </p>
                        )}
                        
                        <p className="mb-3">{item.description}</p>
                        
                        {item.achievements && (
                          <div>
                            <h6 className="text-primary mb-2">Key Achievements:</h6>
                            <ul className="list-unstyled">
                              {item.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="mb-1">
                                  <i className="fas fa-check-circle text-success me-2"></i>
                                  <small>{achievement}</small>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  

                  <div className="timeline-dot position-relative d-flex align-items-center justify-content-center">
                    <div className="bg-white border border-4 border-light-orange rounded-circle d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px', zIndex: 2}}>
                      <i className={`${item.icon} text-primary fa-lg`}></i>
                    </div>
                    <div className="timeline-year position-absolute bg-light-orange text-white px-3 py-1 rounded fw-bold" style={{top: '-10px', fontSize: '0.8rem'}}>
                      {item.year}
                    </div>
                  </div>
                  
       
                  <div style={{flex: '0 0 45%'}}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .timeline-container {
          padding: 2rem 0;
        }
        
        .timeline-dot {
          flex: 0 0 60px;
          z-index: 2;
        }
        
        .timeline-year {
          white-space: nowrap;
        }
        
        .bg-light-orange {
          background-color: #ff6b35 !important;
        }
        
        .orange-accent {
          color: #ff6b35 !important;
        }
        
        .timeline-content {
          animation: fadeInScale 0.6s ease-out;
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .timeline-item:hover .timeline-content {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column !important;
            align-items: center;
          }
          
          .timeline-content {
            flex: 1 !important;
            margin: 0 0 1rem 0 !important;
            max-width: 100%;
          }
          
          .timeline-line {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}

export default Timeline