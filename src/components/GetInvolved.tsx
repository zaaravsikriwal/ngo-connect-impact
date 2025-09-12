import { Button } from "@/components/ui/button";
import getInvolvedImage from "@/assets/get-involved.png";
import { Heart, Users, Handshake, Globe } from "lucide-react";

const GetInvolved = () => {
  const contributions = [
    {
      icon: Heart,
      title: "Donate",
      description: "Support our mission with financial contributions"
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our community of dedicated volunteers"
    },
    {
      icon: Handshake,
      title: "Partner",
      description: "Collaborate with us on impactful projects"
    },
    {
      icon: Globe,
      title: "Spread Awareness",
      description: "Help us reach more communities in need"
    }
  ];

  const supportIncludes = [
    "Monthly updates on impact",
    "Community events access",
    "Volunteer opportunities",
    "Tax-deductible receipts",
    "Partnership benefits",
    "Recognition programs"
  ];

  return (
    <section id="get-involved" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-16">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary">
              Together, we can make a difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our mission and vision to create lasting positive change in communities worldwide.
            </p>
          </div>

          {/* Contribution Options */}
          <div className="space-y-12">
            <h3 className="text-2xl font-semibold text-primary">Your contribution matters</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {contributions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105 text-center space-y-4 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-ngo-yellow/20 text-ngo-yellow-dark rounded-full">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Support Includes */}
          <div className="bg-muted/30 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-8">Your support includes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {supportIncludes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-ngo-yellow rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8 text-left">
              <h3 className="text-3xl font-bold text-primary">
                Make a Lasting Impact
              </h3>
              <p className="text-lg text-muted-foreground">
                Your contributions help us drive change and support those in need. 
                Every action, no matter how small, creates ripples of positive transformation 
                that reach far beyond what we can imagine.
              </p>
              <Button variant="cta" size="lg" className="text-lg px-8">
                Get Involved
              </Button>
            </div>
            
            <div className="animate-scale-in">
              <img
                src={getInvolvedImage}
                alt="Community people working together"
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;