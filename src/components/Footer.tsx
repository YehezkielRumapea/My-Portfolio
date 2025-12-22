import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/YehezkielRumapea"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/yehezkiel-rumapea-08a1b8391"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            {/* Link Email Updated */}
            <a
              href="mailto:rumapeayehezkiel@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Send me an email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-mono text-sm text-muted-foreground">
            Built with <span className="text-primary">♥</span> by Yehezkiel Rumapea
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;