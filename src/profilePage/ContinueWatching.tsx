import React from 'react';
import './ContinueWatching.css';

const continueWatching = [
  { title: "Music", imgSrc: "https://picsum.photos/id/1025/300/200" },          // Placeholder for "Music"
  { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200" },         // Placeholder for "Reading"
  { title: "Blogs", imgSrc: "https://picsum.photos/id/1027/300/200" },           // Placeholder for "Blogs"
  { title: "Places Visited", imgSrc: "https://picsum.photos/id/1028/300/200" },  // Placeholder for "Places Visited"
  { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200" }  // Professional contact
];

const ContinueWatching: React.FC = () => {
  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Reading for Sumanth Samala</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <div key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
