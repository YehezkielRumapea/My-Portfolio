import { Button } from "@/components/ui/button";
import { Terminal, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15)_0%,transparent_70%)]" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Terminal header */}
          <div className="fade-in-up mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-secondary/50 backdrop-blur-sm">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-primary">~/devops-engineer</span>
            </div>
          </div>
          
          {/* Main heading */}
          <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-gradient">Yehezkiel Rumapea</span>
              <span className="terminal-cursor text-primary ml-1">_</span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono">
              <span className="text-primary">$</span> DevOps Engineer & Cloud Architect
            </p>
          </div>
          
          {/* Description */}
          <div className="fade-in-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Building resilient infrastructure, automating deployments, and bridging the gap 
              between development and operations. Passionate about CI/CD, Kubernetes, and 
              cloud-native technologies.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="fade-in-up flex flex-wrap gap-4 mb-12" style={{ animationDelay: "0.4s" }}>
            <Button variant="default" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          {/* Social links */}
          <div className="fade-in-up flex items-center gap-4" style={{ animationDelay: "0.5s" }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-secondary/50 hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-secondary/50 hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="p-3 rounded-lg border border-border bg-secondary/50 hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
