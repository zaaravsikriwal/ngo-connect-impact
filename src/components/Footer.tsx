import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-cta rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold text-primary">NGOConnect</span>
            </div>
            <p className="text-muted-foreground text-sm">
              2025 © NGOConnect. Empowering communities and creating lasting positive change 
              through collaborative action.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-card rounded-full flex items-center justify-center hover:bg-ngo-yellow transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-card rounded-full flex items-center justify-center hover:bg-ngo-yellow transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-card rounded-full flex items-center justify-center hover:bg-ngo-yellow transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-card rounded-full flex items-center justify-center hover:bg-ngo-yellow transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </a>
              <a href="#causes" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Causes
              </a>
              <a href="#get-involved" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Get Involved
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <div className="space-y-2">
              <a href="#donate" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Donate
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact Us
              </a>
              <a href="#volunteer" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Volunteer
              </a>
              <a href="#newsletter" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Newsletter
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <div className="space-y-2">
              <a href="#privacy" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#terms" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#cookies" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} NGOConnect. All Rights Reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Built with ❤️ for communities worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;