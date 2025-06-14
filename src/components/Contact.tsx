import React from 'react';
import { Mail, Twitter, Linkedin } from 'lucide-react';
const Contact = () => {
  return <footer className="py-16 border-t border-border bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 bg-slate-50">
        <div className="space-y-8">
          <div className="space-y-2 text-lg text-muted-foreground max-w-2xl">
            <p className="cursor-interaction transition-colors duration-300 text-slate-950">
              Wanna chat?
            </p>
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="mailto:aum@aumvats.com" target="_blank" className="group flex items-center space-x-2 cursor-interaction hover:text-foreground transition-colors duration-300">
              <Mail size={16} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">aum@aumvats.com</span>
            </a>
            
            <a href="https://x.com/aumvats" target="_blank" className="group flex items-center space-x-2 cursor-interaction hover:text-foreground transition-colors duration-300">
              <Twitter size={16} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">@aumvats</span>
            </a>
            
            <a href="https://www.linkedin.com/in/aumvats/" target="_blank" className="group flex items-center space-x-2 cursor-interaction hover:text-foreground transition-colors duration-300">
              <Linkedin size={16} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
          
          <div className="pt-8 border-t border-border bg-slate-50">
            <p className="text-xs font-mono text-slate-950">
              © 2025 Aum Vats. Crafted with intent.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Contact;