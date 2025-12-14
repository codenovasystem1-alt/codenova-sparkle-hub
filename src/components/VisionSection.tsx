import { Eye, Target, Heart, TrendingUp } from "lucide-react";

const VisionSection = () => {
  const cards = [
    {
      icon: Eye,
      title: "Our Vision",
      description: "We see a future of seamlessly managed last-mile technical and logistics services that can provide companies of all sizes the ability to grow globally. By removing the barrier of a high-cost support services infrastructure, we allow companies of various sizes to enter new markets without compromising service levels.",
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide global IT companies and clients with the tools and human resources needed to augment and extend their global capability. Our aim is to create new technology-driven platforms that fundamentally improve the methods in which global IT software and services are being delivered.",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Our team has been involved in software development and ITO industry for 20 years. As veterans of this marketspace, we've developed innovative solutions for the world's most important IT brands. We create, adapt, and continuously enhance tools and processes for our customers.",
      color: "from-rose-500/20 to-pink-500/20",
    },
    {
      icon: TrendingUp,
      title: "Expanding Goals",
      description: "We seek to offer a growing portfolio of services for our many happy customers. Our team continues to build technology-driven tools that change the way IT services are consumed and delivered. From flexible business models to innovative service platforms, we're committed to success.",
      color: "from-amber-500/20 to-orange-500/20",
    },
  ];

  return (
    <section id="vision" className="section-padding relative overflow-hidden bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Our Foundation
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Vision, Mission &{" "}
            <span className="gradient-text">Values</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The principles that guide us in delivering exceptional technology solutions worldwide.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="glass-card-hover p-8 relative overflow-hidden group"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
