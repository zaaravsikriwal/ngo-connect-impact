import { Calendar, Users, DollarSign } from "lucide-react";

const Impact = () => {
  const stats = [
    {
      icon: Calendar,
      number: "2021",
      label: "Year Established",
      color: "text-ngo-pink"
    },
    {
      icon: Users,
      number: "500K+",
      label: "Communities Served",
      color: "text-ngo-blue"
    },
    {
      icon: DollarSign,
      number: "$5M",
      label: "In Donations",
      color: "text-ngo-green"
    }
  ];

  return (
    <section className="py-20 bg-gradient-impact">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16">
            Our Impact
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center space-y-4 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-white/20 rounded-full mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-4xl font-bold text-white">
                      {stat.number}
                    </h3>
                    <p className="text-white/80 font-medium">
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