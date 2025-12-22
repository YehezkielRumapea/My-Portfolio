const skillCategories = [
  {
    title: "Cloud Platforms (AWS)",
    // Setiap layanan dipisah dengan tanda petik agar menjadi item array sendiri
    skills: ["EC2", "IAM", "S3", "EKS", "VPC"],
  },
  {
    title: "Containerization",
    skills: ["Docker", "Kubernetes", "Helm"],
  },
  {
    title: "CI/CD",
    skills: ["Jenkins", "GitHub Actions"],
  },
  {
    title: "Infrastructure as Code",
    skills: ["Terraform", "OpenTofu"],
  },
  {
    title: "Monitoring & Logging",
    skills: ["Prometheus", "Grafana"],
  },
  {
    title: "Languages & Scripting",
    skills: ["Golang", "Bash", "YAML"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-2">
              <span className="text-muted-foreground">02.</span> tech_stack
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Tools & <span className="text-gradient">Technologies</span>
            </h2>
          </div>

          {/* Skills Grid */}
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

                {/* Di sini React melakukan loop dan membuat kotak (span) untuk SETIAP item di array skills */}
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

          {/* Learning & Training Section */}
          <div className="mt-12 p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm">
            <h3 className="font-mono text-primary text-sm mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terminal-cyan" />
              Learning & Training
            </h3>

            <div className="flex flex-wrap gap-4">
              {[
                "AWS Cloud Fundamentals",
                "Docker & Containerization",
                "Kubernetes Fundamentals",
                "CI/CD with Jenkins & GitHub Actions",
                "Infrastructure as Code with Terraform & OpenTofu",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium">{item}</span>
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