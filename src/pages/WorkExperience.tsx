import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
const timelineData = [
  // Work Experience
  {
    type: "work",
    company: "Kajima London",
    title: "Mid-Level Software Developer",
    tech: "Ruby on Rails, React, Node.js, AWS, PostgreSQL",
    summary: "🚀 Led NHSPS Open Space Website development, enhanced QA, and optimized system performance for 10,000+ users and 50 million bookings.",
    date: "Jun 2023 - Present",
  },
  {
    type: "work",
    company: "Roostify San Francisco",
    title: "Software Developer - II",
    tech: "🔧 CI/CD, Automated Testing, API Gateway, Financial Data Integration",
    summary: "📈 Implemented automated testing, reduced latency by 25%, and led the development of loan origination platform.",
    date: "Nov 2021 - Dec 2022",
  },
  {
    type: "work",
    company: "eKincare India",
    title: "Software Developer - I",
    tech: "💻 React, Context API, Twilio, Razorpay, AWS",
    summary: "👨‍⚕️ Developed chat and video consultation features, created an analytics dashboard, and optimized the Lighthouse score.",
    date: "Jul 2020 - Nov 2021",
  },
  {
    type: "work",
    company: "LetsVenture India",
    title: "Software Developer",
    tech: "🌐 Ruby on Rails, SQL, AngularJS, ReactJS, MERN stack",
    summary: "🚀 Developed key features for LetsVenture platform and built products from scratch: CRM tool and secondary fundraising platform.",
    date: "Jul 2018 - Jul 2020",
  },
  // Education
  {
    type: "education",
    institution: "Swansea University",
    degree: "Masters 🎓",
    details: "📜 Developed a form management application with Java Spring Boot and ReactJS, deployed on Heroku and Netlify.",
    date: "Jan 2022 - May 2023",
  },
  {
    type: "education",
    institution: "Vellore Institute of Technology",
    degree: "Bachelor's 🏅",
    details: "🔬 Contributed to ISTE and Computer Society of India, organized Gravitas Fest, and published research in IJMET.",
    date: "Apr 2014 - Apr 2018",
  },
];

const WorkExperience: React.FC = () => {
  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.type}`}
            contentStyle={
              item.type === "work"
                ? index === 0
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(240, 240, 240)', color: '#fff' }
                : { background: 'rgb(255, 224, 230)', color: '#fff' } // Lighter red for education
            }
            contentArrowStyle={
              item.type === "work"
                ? { borderRight: index === 0 ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(240, 240, 240)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.date}
            iconStyle={
              item.type === "work"
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' } // Softer red for education icon
            }
            icon={item.type === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.type === "work" ? (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.title} 🎉</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
                <p className="vertical-timeline-element-tech">🔧 {item.tech}</p>
                <p>{item.summary}</p>
              </div>
            ) : (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.degree}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.institution}</h4>
                <p>{item.details}</p>
              </div>
            )}
          </VerticalTimelineElement>
        ))}

        {/* Additional static element at the end */}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
