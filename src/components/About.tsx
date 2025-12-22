import { Server, Cloud, GitBranch, Shield } from "lucide-react";

const expertise = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Designing and implementing scalable cloud solutions on AWS, GCP, and Azure.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Building automated deployment pipelines with Jenkins, GitLab CI, and GitHub Actions.",
  },
  {
    icon: Server,
    title: "Container Orchestration",
    description: "Managing containerized applications with Docker and Kubernetes at scale.",
  },
  {
    icon: Shield,
    title: "Security & Monitoring",
    description: "Implementing DevSecOps practices and comprehensive monitoring solutions.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-2">
              <span className="text-muted-foreground">01.</span> about_me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              What I <span className="text-gradient">Bring</span> to the Table
            </h2>
          </div>
          
          {/* About content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                With over 5 years of experience in DevOps and Site Reliability Engineering, 
                I specialize in building and maintaining robust infrastructure that scales. 
                I'm passionate about automation, infrastructure as code, and creating 
                developer-friendly workflows.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My journey started as a systems administrator, which gave me a deep 
                understanding of both the development and operations sides. Today, I focus 
                on bridging these worlds through modern DevOps practices.
              </p>
              <div className="flex gap-4 font-mono text-sm">
                <div className="px-3 py-1 rounded bg-secondary border border-border">
                  <span className="text-muted-foreground">Experience:</span>{" "}
                  <span className="text-primary">5+ years</span>
                </div>
                <div className="px-3 py-1 rounded bg-secondary border border-border">
                  <span className="text-muted-foreground">Projects:</span>{" "}
                  <span className="text-primary">50+</span>
                </div>
              </div>
            </div>
            
            {/* Terminal-style code block */}
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-terminal-yellow/80" />
                <div className="w-3 h-3 rounded-full bg-primary/80" />
                <span className="ml-2 font-mono text-sm text-muted-foreground">profile.yml</span>
              </div>
              <pre className="p-4 font-mono text-sm overflow-x-auto">
                <code>
                  <span className="text-terminal-cyan">name</span>: <span className="text-foreground">"Yehezkiel Rumapea"</span>{"\n"}
                  <span className="text-terminal-cyan">role</span>: <span className="text-foreground">"DevOps Engineer"</span>{"\n"}
                  <span className="text-terminal-cyan">available</span>: <span className="text-primary">true</span>{"\n"}
                  <span className="text-terminal-cyan">interests</span>:{"\n"}
                  {"  "}<span className="text-muted-foreground">-</span> <span className="text-foreground">"Infrastructure as Code"</span>{"\n"}
                  {"  "}<span className="text-muted-foreground">-</span> <span className="text-foreground">"Cloud Native"</span>{"\n"}
                  {"  "}<span className="text-muted-foreground">-</span> <span className="text-foreground">"Open Source"</span>
                </code>
              </pre>
            </div>
          </div>
          
          {/* Expertise cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-lg border border-border bg-card hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
