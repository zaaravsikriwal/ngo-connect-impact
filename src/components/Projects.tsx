import { Button } from "@/components/ui/button";
import communityWork from "@/assets/community-work.png";

const Projects = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-scale-in">
            <img
              src={communityWork}
              alt="People working on transformative projects"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
          
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                Be part of transformative projects.
              </h2>
              <p className="text-lg text-muted-foreground">
                Join our efforts and witness the change you can create. Our projects span across 
                education, healthcare, environmental conservation, and community development, 
                ensuring sustainable impact for generations to come.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary">
                Our work spans various important causes.
              </h3>
              <p className="text-muted-foreground">
                From education in health, we aim to support all communities with comprehensive 
                programs designed to address their unique needs and challenges.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg">
                Learn More
              </Button>
              <Button variant="cta-outline" size="lg">
                Explore Causes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;