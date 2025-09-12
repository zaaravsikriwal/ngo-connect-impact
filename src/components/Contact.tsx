import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import contactHearts from "@/assets/contact-hearts.png";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-scale-in">
            <img
              src={contactHearts}
              alt="Get in touch illustration"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>

          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="bg-card border-border"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-card border-border"
                />
              </div>
              <Textarea
                placeholder="Your Message"
                rows={5}
                className="bg-card border-border"
              />
              <Button variant="cta" size="lg" className="w-full">
                Send Message
              </Button>
            </form>

            <div className="space-y-4">
              <p className="text-muted-foreground">Follow us on social media to stay updated:</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-ngo-yellow hover:border-ngo-yellow transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-ngo-yellow hover:border-ngo-yellow transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-ngo-yellow hover:border-ngo-yellow transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-ngo-yellow hover:border-ngo-yellow transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;