import { Button } from "@/components/ui/button";
import heroCommunity from "@/assets/hero-community.png";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";

const Hero = () => {
  const containerRef = useGSAPAnimations();

  return (
    <section ref={containerRef} id="home" className="min-h-screen bg-gradient-hero flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="gsap-hero-text text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Meet the team making a{" "}
                <span className="text-transparent bg-gradient-to-r from-earth-primary to-earth-emerald bg-clip-text">
                  difference
                </span>
              </h1>
              <p className="gsap-hero-text text-xl text-muted-foreground max-w-lg">
                We're dedicated to empowering communities and creating lasting positive change 
                through collaborative action and unwavering support.
              </p>
            </div>
            <div className="gsap-hero-text flex flex-col sm:flex-row gap-4">
              <Button variant="earth" size="lg" className="text-lg px-8">
                Get Involved
              </Button>
              <Button variant="cta" size="lg" className="text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="lg:order-last gsap-slide-right">
            <div className="relative">
              <img
                src={heroCommunity}
                alt="Community teamwork illustration"
                className="w-full h-auto max-w-lg mx-auto"
              />
              <div className="gsap-float absolute -top-4 -right-4 w-20 h-20 bg-earth-light rounded-full opacity-60"></div>
              <div className="gsap-float absolute -bottom-6 -left-6 w-16 h-16 bg-nature-mint rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;