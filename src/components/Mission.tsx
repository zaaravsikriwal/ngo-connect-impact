import communityBanner from "@/assets/community-banner.png";

const Mission = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Established to address pressing social issues, our organization strives to create 
              lasting change through community engagement and support for various causes. We believe 
              in the power of collective action and the strength that comes from working together 
              towards a common goal.
            </p>
          </div>

          <div className="relative bg-community-bg rounded-2xl p-12 shadow-soft animate-slide-up">
            <img
              src={communityBanner}
              alt="Community is strength banner"
              className="w-full h-48 object-cover rounded-xl mb-8"
            />
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-community-text">
                COMMUNITY IS STRENGTH.
              </h3>
              <p className="text-community-text/90 text-lg">
                Together, we can overcome any challenge and create positive change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;