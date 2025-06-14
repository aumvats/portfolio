import React from 'react';
import Header from '../components/Header';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import Articles from '../components/Articles';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="minimal-container">
      <Header />
      <main>
        <WorkExperience />
        <Articles />
      </main>
      <Contact />
    </div>
  );
};

export default Index;
