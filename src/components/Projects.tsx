import React from 'react';
import { ExternalLink } from 'lucide-react';
const projects = [{
  title: "Design System 2.0",
  description: "A comprehensive design system serving 100+ designers across 15 product teams.",
  year: "2024",
  link: "#"
}, {
  title: "Payment Flow Redesign",
  description: "Reduced checkout abandonment by 23% through simplified payment flows.",
  year: "2023",
  link: "#"
}, {
  title: "Mobile App Overhaul",
  description: "Complete redesign of iOS and Android apps, improving user satisfaction by 40%.",
  year: "2022",
  link: "#"
}, {
  title: "Creator Tools Platform",
  description: "Built from ground up, now used by 50K+ content creators monthly.",
  year: "2021",
  link: "#"
}];
const Projects = () => {
  return <section className="py-16 border-t border-border bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-light mb-12 tracking-tight">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => <div key={index} className="group hover-lift border border-transparent hover:border-border p-6 -m-6 rounded-sm">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-medium group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-muted-foreground font-mono">
                    {project.year}
                  </span>
                  <ExternalLink size={14} className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 cursor-pointer" />
                </div>
              </div>
              <p className="text-sm leading-relaxed transition-colors duration-300 text-slate-950">
                {project.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;