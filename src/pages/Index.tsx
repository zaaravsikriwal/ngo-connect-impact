import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import GetInvolved from "@/components/GetInvolved";
import Projects from "@/components/Projects";
import DonateForm from "@/components/DonateForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Impact />
      <Team />
      <GetInvolved />
      <Projects />
      <DonateForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
