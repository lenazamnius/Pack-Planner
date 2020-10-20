import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container semitransparent-container">
      <h2>Hello to new PackPlanner user!</h2>
      <p className="flow-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        praesentium debitis dolore perspiciatis modi vitae illo labore,
        quibusdam aliquid nemo obcaecati sunt ea pariatur vel aperiam,
        consequuntur cum voluptatum doloremque!
      </p>
      <Link
        to="/create-gear-list"
        className="waves-effect waves-light btn-large"
      >
        Let's pack for hike
      </Link>
    </div>
  );
};

export default LandingPage;