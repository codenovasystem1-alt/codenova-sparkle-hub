import { Zap, Shield, Layers, Target, Headphones, Rocket } from "lucide-react";

const WhyUsSection = () => {
  const reasons = [
    {
      icon: Zap,
      title: "AI-Driven Solutions",
      description: "Future-ready technology powered by artificial intelligence",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Clean, maintainable code that grows with your business",
    },
    {
      icon: Shield,
      title: "Secure by Design",
      description: "Industry-leading security practices and compliance",
    },
    {
      icon: Target,
      title: "Result-Oriented",
      description: "Technology-focused approach delivering measurable outcomes",
    },
    {
      icon: Headphones,
      title: "End-to-End Support",
      description: "Complete development and ongoing maintenance support",
    },
    {
      icon: Rocket,
      title: "Corporate-Grade UI",
      description: "Premium user experience with professional design standards",
    },
  ];

  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Trusted{" "}
              <span className="gradient-text">Technology Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are committed to helping our partners grow and thrive in the 
              ever-changing landscape of the digital world.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team has been involved in the software development and ITO industry 
              for the past 20 years. As veterans of this marketspace, we've developed 
              innovative solutions for the world's most important IT brands.
            </p>
            <div className="glass-card p-6 border-l-4 border-l-primary">
              <p className="text-foreground italic">
                "We create, adapt, and continuously enhance tools and processes to 
                ensure success for our customers without sacrificing quality."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
