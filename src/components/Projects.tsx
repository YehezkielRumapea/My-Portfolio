import { Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "G-Backup",
    description: "A dashboard-driven disaster recovery solution that automates secure cloud backups to Google Drive using Rclone.",
    tech: ["Vue.js", "Go", "Rclone", "MySQL"],
    github: "https://github.com/YehezkielRumapea/G-Backup",
  },
  {
    title: "Static Website on AWS S3",
    description: "This project demonstrates how to deploy a static website to AWS S3 using Terraform.",
    tech: ["S3 Bucket", "Terraform"],
    github: "https://github.com/YehezkielRumapea/StaticWeb_in_aws_S3_Bucket",
  },
  {
    title: "Cloud Native Monitoring App on Kubernetes",
    description: "A project that takes from local Python development to production-grade deployment on AWS + Kubernetes.",
    tech: ["Python", "Docker", "Terraform", "EKS", "ECR"],
    github: "https://github.com/YehezkielRumapea/cloud_native_monitoring_app",
  },
  {
    title: "Netflix Clone Deployment",
    description: "Deploy Netflix Clone on Cloud using Jenkins.",
    tech: ["Jenkins", "Prometheus", "Grafana", "ECR", "EC2", "Trivy"],
    github: "https://github.com/YehezkielRumapea/NetflixClone",
  },
];

const Projects = () => {
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
              My <span className="text-gradient">Projects</span>
            </h2>
          </div>
          
          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group p-6 rounded-lg border border-border bg-card hover-lift transition-all duration-300 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <Folder className="w-10 h-10 text-primary/80 group-hover:text-primary transition-colors" />
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[10px] font-mono px-2 py-1 rounded bg-secondary text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* View more button */}
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" asChild className="font-mono">
              <a href="https://github.com/YehezkielRumapea" target="_blank" rel="noopener noreferrer">
                explore_more_on_github
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;