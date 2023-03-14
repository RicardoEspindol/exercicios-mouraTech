import React from 'react';
import Timer from '../components/exemplo1';
import Menu from '../components/Menu';



function HomePage() {
  return (
    <div>
      <Menu/>
      <Timer start={0} ms={1000} />;
    </div>
  )
}

export default HomePage;