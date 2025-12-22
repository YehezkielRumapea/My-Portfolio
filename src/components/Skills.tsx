const skillCategories = [
  {
    title: "Cloud Platforms",
    skills: ["AWS", "Google Cloud", "Azure", "DigitalOcean"],
  },
  {
    title: "Containerization",
    skills: ["Docker", "Kubernetes", "Helm", "Podman"],
  },
  {
    title: "CI/CD",
    skills: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD"],
  },
  {
    title: "Infrastructure as Code",
    skills: ["Terraform", "Ansible", "Pulumi", "CloudFormation"],
  },
  {
    title: "Monitoring & Logging",
    skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
  },
  {
    title: "Languages & Scripting",
    skills: ["Python", "Bash", "Go", "YAML"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-2">
              <span className="text-muted-foreground">02.</span> tech_stack
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Tools & <span className="text-gradient">Technologies</span>
            </h2>
          </div>
          
          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-mono text-primary text-sm mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-secondary text-sm font-medium text-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional certifications */}
          <div className="mt-12 p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm">
            <h3 className="font-mono text-primary text-sm mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terminal-cyan" />
              Certifications
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                "AWS Solutions Architect",
                "CKA (Kubernetes Admin)",
                "HashiCorp Terraform Associate",
                "Google Cloud Professional",
              ].map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
