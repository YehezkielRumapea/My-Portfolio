import { Server, Cloud, GitBranch, Shield } from "lucide-react";

const expertise = [
  {
    icon: Cloud,
    title: "Cloud Fundamentals",
    description: "Developing foundational knowledge in cloud architecture and deploying applications on AWS and GCP.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Implementation",
    description: "Building automated workflows and deployment pipelines using GitHub Actions and GitLab CI for academic projects.",
  },
  {
    icon: Server,
    title: "Containerization",
    description: "Utilizing Docker to create consistent development environments and managing microservices.",
  },
  {
    icon: Shield,
    title: "DevOps Mindset",
    description: "Focused on bridging the gap between development and operations through automation and collaborative culture.",
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
              Passionate about <span className="text-gradient">DevOps</span> & Infrastructure
            </h2>
          </div>
          
          {/* About content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Hello! I am a final-year student with a deep passion for 
                <strong> Cloud Computing</strong> and <strong>DevOps Engineering</strong>. 
                Throughout my academic journey, I have focused on mastering how to build efficient, scalable infrastructure through automation.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                I enjoy experimenting with emerging technologies and transforming manual processes into 
                automated workflows. I am currently working on several personal projects and am eager to 
                apply my skills to real-world challenges in a professional environment.
              </p>
              <div className="flex gap-4 font-mono text-sm">
                <div className="px-3 py-1 rounded bg-secondary border border-border">
                  <span className="text-muted-foreground">Status:</span>{" "}
                  <span className="text-primary">Final Year Student</span>
                </div>
                <div className="px-3 py-1 rounded bg-secondary border border-border">
                  <span className="text-muted-foreground">Open to:</span>{" "}
                  <span className="text-primary">Internships / Junior Roles</span>
                </div>
              </div>
            </div>
            
            {/* Terminal-style code block */}
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-terminal-yellow/80" />
                <div className="w-3 h-3 rounded-full bg-primary/80" />
                <span className="ml-2 font-mono text-sm text-muted-foreground">student_profile.yml</span>
              </div>
              <pre className="p-4 font-mono text-sm overflow-x-auto">
                <code>
                  <span className="text-terminal-cyan">name</span>: <span className="text-foreground">"Yehezkiel Rumapea"</span>{"\n"}
                  <span className="text-terminal-cyan">focus</span>: <span className="text-foreground">"Cloud & Platform Engineering"</span>{"\n"}
                  <span className="text-terminal-cyan">learning</span>: <span className="text-primary">["Kubernetes", "Terraform", "AWS"]</span>{"\n"}
                  <span className="text-terminal-cyan">goals</span>:{"\n"}
                  {"  "}<span className="text-muted-foreground">-</span> <span className="text-foreground">"Infrastructure as Code"</span>{"\n"}
                  {"  "}<span className="text-muted-foreground">-</span> <span className="text-foreground">"Zero Downtime Deployment"</span>{"\n"}
                  {"  "}<span className="text-muted-foreground">-</span> <span className="text-foreground">"Cloud Native Solutions"</span>
                </code>
              </pre>
            </div>
          </div>
          
          {/* Expertise cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-lg border border-border bg-card hover-lift transition-all duration-300"
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