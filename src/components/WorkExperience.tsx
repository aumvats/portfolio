import React from 'react';
const experiences = [
  {
    company: "Bounce ",
    role: "Product Consultant",
    period: "May 2025 — Present",
    description: "Experimenting at the intersection of product, ops and automation to make electric mobility accessible, affordable and rider friendly."
  },
  {
    company: "Eazybe",
    role: "Product Marketing Manager",
    period: "May 2024 — September 2024",
    description: "Managed the brand strategy and content for the brand's social media presence."
  },
  {
    company: "Droplet",
    role: "Founder",
    period: "November 2023 — February 2024",
    description: "Tried building freewater.io for India. Fun experience, building a startup out of college."
  }
];
const WorkExperience = () => {
  return (
    <section>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75em' }}>Work</h2>
      {experiences.map((exp, index) => (
        <div key={index} style={{ marginBottom: '1.25em' }}>
          <div style={{ fontWeight: 'bold' }}>{exp.company} <span style={{ fontWeight: 'normal', fontSize: '0.95em' }}>{exp.period}</span></div>
          <div style={{ fontStyle: 'italic', marginBottom: '0.25em' }}>{exp.role}</div>
          <div>{exp.description}</div>
        </div>
      ))}
    </section>
  );
};
export default WorkExperience;