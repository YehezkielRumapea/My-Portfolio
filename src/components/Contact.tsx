import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08)_0%,transparent_60%)]" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section header */}
          <p className="font-mono text-primary mb-2">
            <span className="text-muted-foreground">04.</span> contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            I'm currently looking for new opportunities and interesting DevOps challenges. 
            Whether you have a question, a project idea, or just want to say hi, 
            my inbox is always open!
          </p>
          
          {/* Contact info cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-md mx-auto">
            <div className="p-4 rounded-lg border border-border bg-card/50 backdrop-blur-sm">
              <Mail className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Email</p>
              {/* Email sudah diperbarui */}
              <p className="font-mono text-[13px]">rumapeayehezkiel@gmail.com</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card/50 backdrop-blur-sm">
              <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Availability</p>
              <p className="font-mono text-sm text-primary">Open for Intern/Junior Role</p>
            </div>
          </div>
          
          {/* CTA Button */}
          <Button variant="default" size="lg" className="glow" asChild>
            <a href="mailto:rumapeayehezkiel@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Send Message
            </a>
          </Button>
          
          {/* Terminal-style footer */}
          <div className="mt-16 font-mono text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              <span className="text-primary">$</span>
              <span>echo "Thanks for visiting!"</span>
              <span className="terminal-cursor text-primary">_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;