import React from 'react';
import HeroSection from './components/HeroSection';
import ThingsILove from './components/ThingsILove';
import FinalSection from './components/FinalSection';

const App = () => {
  return (
    <div className="w-screen h-screen">
      <HeroSection />
      <ThingsILove />
      <FinalSection />
    </div>
  );
};

export default App;
