import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-cta rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg">N</span>
            </div>
            <span className="text-2xl font-bold text-primary">NGOConnect</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#causes" className="text-foreground hover:text-primary transition-colors">
              Causes
            </a>
            <a href="#get-involved" className="text-foreground hover:text-primary transition-colors">
              Get Involved
            </a>
            <a href="#donate" className="relative">
              <Button variant="earth" size="sm" className="font-semibold">
                Donate Now
              </Button>
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost">Log in</Button>
            <Button variant="cta">Join Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#causes" className="text-foreground hover:text-primary transition-colors">
                Causes
              </a>
              <a href="#get-involved" className="text-foreground hover:text-primary transition-colors">
                Get Involved
              </a>
              <a href="#donate">
                <Button variant="earth" size="sm" className="font-semibold w-full">
                  Donate Now
                </Button>
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost">Log in</Button>
                <Button variant="cta">Join Us</Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;