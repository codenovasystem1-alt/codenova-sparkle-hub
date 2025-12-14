const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "AI Solutions", href: "#services" },
      { name: "Cloud & DevOps", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Vision", href: "#vision" },
      { name: "Why Choose Us", href: "#why-us" },
      { name: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer className="border-t border-border/50 bg-secondary/30">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="text-primary font-heading font-bold text-xl">C</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                Codenova<span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Innovating Digital Intelligence. We enable digital transformation and 
              accelerate innovation with cutting-edge technology solutions.
            </p>
            <p className="text-muted-foreground text-sm">
              <strong className="text-foreground">Codenova Softwares</strong> – Your trusted technology partner.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Codenova Softwares. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Innovating Digital Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
