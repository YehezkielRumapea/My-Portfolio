import { Button } from "@/components/ui/button";
import { Terminal, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/Profile.jpeg";

const Hero = () => {
  // Fungsi scroll ke Projects
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Fungsi scroll ke Contact
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15)_0%,transparent_70%)]" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Terminal header */}
              <div className="fade-in-up mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-secondary/50 backdrop-blur-sm">
                  <Terminal className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm text-primary">~/devops-engineer</span>
                </div>
              </div>

              {/* Main heading */}
              <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
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
                <p className="text-lg text-muted-foreground max-w-xl mb-8">
                  Building resilient infrastructure, automating deployments, and bridging the gap 
                  between development and operations. Passionate about CI/CD, Kubernetes, and 
                  cloud-native technologies.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="fade-in-up flex flex-wrap justify-center lg:justify-start gap-4 mb-8" style={{ animationDelay: "0.4s" }}>
                <Button variant="default" size="lg" onClick={scrollToProjects}>
                  View Projects
                </Button>
                <Button variant="outline" size="lg" onClick={scrollToContact}>
                  Get In Touch
                </Button>
              </div>

              {/* Social links */}
              <div className="fade-in-up flex items-center justify-center lg:justify-start gap-4" style={{ animationDelay: "0.5s" }}>
                <a 
                  href="https://github.com/YehezkielRumapea" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border bg-secondary/50 hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/yehezkiel-rumapea-08a1b8391" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border bg-secondary/50 hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:rumapeayehezkiel@gmail.com"
                  className="p-3 rounded-lg border border-border bg-secondary/50 hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right side - Profile Photo */}
            <div className="fade-in-up flex-shrink-0" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/50 blur-xl opacity-50" />
                <img 
                  src={profilePhoto} 
                  alt="Yehezkiel Rumapea" 
                  className="relative w-full h-full object-cover rounded-full border-4 border-primary/50"
                />
              </div>
            </div>
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
