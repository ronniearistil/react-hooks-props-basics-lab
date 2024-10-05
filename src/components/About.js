import React from 'react';
import Links from './Links';

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>} {/* Conditional rendering for bio */}
      <img src="/IMG_1724.jpg" alt="I made this" /> {/* Image is included */}
      <Links github={github} linkedin={linkedin} /> {/* Links component */}
    </div>
  );
}

export default About;






