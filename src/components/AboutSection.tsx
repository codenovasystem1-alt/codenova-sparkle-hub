import { Globe, Users, Shield, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Delivery",
      description: "Global program management with local project delivery teams across multiple regions.",
    },
    {
      icon: Users,
      title: "Right Talent",
      description: "Holistic approach to design and develop solutions with the right talent to drive outcomes.",
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Platform to improve transparency and provide a better quality of service.",
    },
    {
      icon: Lightbulb,
      title: "Expertise",
      description: "Depth and breadth of expertise to deliver technology and operational excellence.",
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Who We Are
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Enabling Digital{" "}
              <span className="gradient-text">Transformation</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Codenova Softwares, we enable digital transformation and accelerate innovation. 
              We are a technology and digital engineering company that provides expertise across 
              different industries.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As a leading strategic partner to companies in India and around the world, we have 
              leveraged technology to enable business transformation. We address the entire breadth 
              of business needs, from strategy and design to managing operations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We draw on deep industry expertise and a command of the fast-evolving fields of cloud, 
              data artificial intelligence, connectivity, software, digital engineering, and platforms.
            </p>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card-hover p-6 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
