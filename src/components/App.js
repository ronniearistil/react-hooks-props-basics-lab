import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import { user } from '../data/user';

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} /> {/* Props passed correctly */}
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} /> {/* Correct props passed */}
    </div>
  );
}

export default App;


