import React from 'react';

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github}>{github}</a> {/* Correct rendering of GitHub link */}
      <a href={linkedin}>{linkedin}</a> {/* Correct rendering of LinkedIn link */}
    </div>
  );
}

export default Links;


