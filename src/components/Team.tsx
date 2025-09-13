import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGSAPAnimations } from "@/hooks/useGSAPAnimations";

const Team = () => {
  const teamMembers = [
    { name: "Alex Martinez", role: "Executive Director", initials: "AM" },
    { name: "Sophia Turner", role: "Program Director", initials: "ST" },
    { name: "David Kim", role: "Finance Officer", initials: "DK" },
    { name: "Emma Brown", role: "Outreach Coordinator", initials: "EB" },
    { name: "Liam Johnson", role: "Community Lead", initials: "LJ" },
    { name: "Mia Thompson", role: "Project Manager", initials: "MT" },
    { name: "Noah Wilson", role: "Volunteer", initials: "NW" },
    { name: "Ava Clark", role: "Social Strategy", initials: "AC" },
    { name: "Alex Johnson", role: "Communications", initials: "AJ" },
    { name: "Maria Lopez", role: "Marketing Specialist", initials: "ML" },
    { name: "David Smith", role: "Operations Manager", initials: "DS" },
    { name: "Emily Chen", role: "Community Organizer", initials: "EC" },
  ];

  const containerRef = useGSAPAnimations();

  return (
    <section ref={containerRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-12">
          <div className="space-y-4 gsap-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary">
              Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate individuals behind our initiatives and discover how 
              their dedication drives positive change in communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="gsap-scale bg-card rounded-2xl p-6 shadow-card hover:shadow-earth transition-all duration-300 space-y-4"
              >
                <Avatar className="w-16 h-16 mx-auto">
                  <AvatarImage src="" alt={member.name} />
                  <AvatarFallback className="bg-gradient-earth text-white font-semibold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center space-y-1">
                  <h3 className="font-semibold text-foreground text-sm">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;