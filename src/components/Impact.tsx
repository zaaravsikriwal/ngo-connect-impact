import { Calendar, Users, DollarSign } from "lucide-react";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";

const Impact = () => {
  const containerRef = useGSAPAnimations();
  
  const stats = [
    {
      icon: Calendar,
      number: "2021",
      label: "Year Established",
      color: "text-earth-primary"
    },
    {
      icon: Users,
      number: "500",
      label: "Communities Served",
      color: "text-nature-leaf"
    },
    {
      icon: DollarSign,
      number: "5",
      label: "Million in Donations",
      color: "text-earth-emerald"
    }
  ];

  return (
    <section ref={containerRef} className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-12">
          <h2 className="gsap-fade-up text-4xl lg:text-5xl font-bold text-white mb-16">
            Our Impact
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="gsap-scale bg-white/15 backdrop-blur-sm rounded-2xl p-8 text-center space-y-4 shadow-earth hover:shadow-soft transition-all duration-300"
                >
                  <div className="gsap-float inline-flex items-center justify-center w-16 h-16 text-white bg-white/25 rounded-full mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="gsap-counter text-4xl font-bold text-white" data-count={stat.number}>
                      0
                    </h3>
                    <p className="text-white/90 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;