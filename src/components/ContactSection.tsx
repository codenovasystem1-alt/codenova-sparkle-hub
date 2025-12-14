import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="glass-card p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                Get in Touch
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Let's Build Something{" "}
                <span className="gradient-text">Powerful</span> Together
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Ready to transform your business with cutting-edge technology? 
                Contact us today to discuss your project requirements.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Us</p>
                    <a href="mailto:info@codenovasoftwares.com" className="text-foreground hover:text-primary transition-colors">
                      info@codenovasoftwares.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">India</p>
                  </div>
                </div>
              </div>

              <Button variant="hero" size="lg">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Right - Decorative */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Animated rings */}
                <div className="w-64 h-64 rounded-full border border-primary/20 animate-pulse-glow" />
                <div className="absolute inset-4 rounded-full border border-primary/30 animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
                <div className="absolute inset-8 rounded-full border border-primary/40 animate-pulse-glow" style={{ animationDelay: '1s' }} />
                <div className="absolute inset-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-heading font-bold gradient-text mb-2">C</div>
                    <p className="text-sm text-muted-foreground">Codenova</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
