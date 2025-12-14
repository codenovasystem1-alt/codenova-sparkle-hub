import { 
  Globe, 
  Smartphone, 
  Bot, 
  Palette, 
  Cloud, 
  BarChart3, 
  Code2, 
  Megaphone, 
  ShieldCheck 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "High-performance, scalable, and responsive websites tailored to your business needs. Corporate sites, custom applications, and admin dashboards.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "End-to-end mobile solutions for Android, iOS, and cross-platform apps with real-time features and optimal user experience.",
    },
    {
      icon: Bot,
      title: "AI-Driven Solutions",
      description: "Leverage artificial intelligence to automate and optimize business processes with smart analytics, chatbots, and virtual assistants.",
    },
    {
      icon: Palette,
      title: "UI / UX Design",
      description: "Modern, clean, and user-focused designs that elevate your brand. Premium redesigns with glassmorphism and minimal flat aesthetics.",
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "Reliable cloud infrastructure and DevOps solutions for seamless deployment, CI/CD pipelines, and server optimization.",
    },
    {
      icon: BarChart3,
      title: "Data & Dashboards",
      description: "Make data-driven decisions with smart analytics dashboards, charts, reporting systems, and performance tracking.",
    },
    {
      icon: Code2,
      title: "Custom Software",
      description: "Tailor-made software solutions to streamline operations. CRM, ERP systems, automation tools, and API integrations.",
    },
    {
      icon: Megaphone,
      title: "Branding & Digital",
      description: "Build a strong digital identity with IT company branding, logo design, stationery, and promotional creatives.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Auth",
      description: "Secure systems with JWT authentication, role-based access control, data protection, and compliance best practices.",
    },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive{" "}
            <span className="gradient-text">IT Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From web development to AI-powered solutions, we deliver end-to-end 
            technology services that drive business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card-hover p-8 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
