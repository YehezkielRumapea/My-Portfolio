import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Kubernetes Multi-Cluster Manager",
    description:
      "A comprehensive tool for managing multiple Kubernetes clusters with automated failover, centralized monitoring, and GitOps-based deployments.",
    tech: ["Kubernetes", "Go", "ArgoCD", "Prometheus"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "CI/CD Pipeline Framework",
    description:
      "Modular, reusable CI/CD templates for GitHub Actions with built-in security scanning, artifact management, and multi-environment deployments.",
    tech: ["GitHub Actions", "Docker", "Trivy", "Terraform"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Infrastructure Cost Optimizer",
    description:
      "AWS cost optimization tool that analyzes resource usage patterns and provides actionable recommendations for reducing cloud spend.",
    tech: ["Python", "AWS", "Lambda", "React"],
    github: "https://github.com",
    featured: true,
  },
  {
    title: "Log Aggregation Platform",
    description:
      "Scalable logging solution built on ELK stack with custom dashboards and anomaly detection.",
    tech: ["Elasticsearch", "Logstash", "Kibana"],
    github: "https://github.com",
  },
  {
    title: "Terraform Module Library",
    description:
      "Collection of production-ready Terraform modules for AWS infrastructure provisioning.",
    tech: ["Terraform", "AWS", "Python"],
    github: "https://github.com",
  },
  {
    title: "Container Security Scanner",
    description:
      "Automated vulnerability scanning for Docker images with integration to CI pipelines.",
    tech: ["Go", "Docker", "Trivy"],
    github: "https://github.com",
  },
];

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-2">
              <span className="text-muted-foreground">03.</span> projects
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured <span className="text-gradient">Work</span>
            </h2>
          </div>
          
          {/* Featured projects */}
          <div className="space-y-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="p-8">
                  <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded bg-secondary text-sm font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Other projects */}
          <div>
            <h3 className="text-xl font-bold text-center mb-8">Other Noteworthy Projects</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project) => (
                <div
                  key={project.title}
                  className="group p-6 rounded-lg border border-border bg-card hover-lift"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Folder className="w-10 h-10 text-primary" />
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-mono text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* View more button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
