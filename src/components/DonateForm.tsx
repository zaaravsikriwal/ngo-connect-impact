import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { CheckCircle, ArrowRight, Heart } from "lucide-react";

const DonateForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCause, setSelectedCause] = useState("");
  const [donationAmount, setDonationAmount] = useState("");

  const steps = [
    "Choose Cause",
    "Select Donation",
    "Your Details",
    "Additional Options",
    "Complete"
  ];

  const causes = [
    { id: "health", name: "Health", description: "Creating awareness and training regarding various diseases that occur in the human body" },
    { id: "environment", name: "Environment", description: "Working on environmental protection and conservation" },
    { id: "agriculture", name: "Agriculture", description: "Increasing carbon in the soil for soil health and sustainable farming" },
    { id: "education", name: "Education", description: "Creating perspective in humans and promoting quality education" },
    { id: "intelligence", name: "Human Intelligence", description: "Working on rules and procedures to make humans intelligent" }
  ];

  const donationAmounts = ["₹5,000", "₹10,000", "₹25,000", "₹50,000", "₹1,00,000"];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-primary">Choose Your Cause</h2>
              <p className="text-muted-foreground">Select the cause you're most passionate about supporting</p>
            </div>
            <div className="space-y-4">
              {causes.map((cause) => (
                <div
                  key={cause.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                    selectedCause === cause.id
                      ? "border-earth-primary bg-earth-primary/5"
                      : "border-border hover:border-earth-primary/50"
                  }`}
                  onClick={() => setSelectedCause(cause.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 mt-1 ${
                      selectedCause === cause.id ? "bg-earth-primary border-earth-primary" : "border-border"
                    }`}></div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">{cause.name}</h3>
                      <p className="text-sm text-muted-foreground">{cause.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-primary">Select Donation Amount</h2>
              <p className="text-muted-foreground">Choose an amount that works for you</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  className={`p-4 rounded-lg border text-center transition-all duration-200 ${
                    donationAmount === amount
                      ? "border-earth-primary bg-earth-primary text-white"
                      : "border-border hover:border-earth-primary/50"
                  }`}
                  onClick={() => setDonationAmount(amount)}
                >
                  <span className="font-semibold">{amount}</span>
                </button>
              ))}
            </div>
            <div className="space-y-2">
              <Label htmlFor="custom-amount">Or enter custom amount</Label>
              <Input
                id="custom-amount"
                type="number"
                placeholder="Enter amount in ₹"
                value={donationAmount.replace("₹", "").replace(/,/g, "")}
                onChange={(e) => {
                  const formattedValue = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  setDonationAmount(`₹${formattedValue}`);
                }}
              />
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-primary">Your Details</h2>
              <p className="text-muted-foreground">Help us change lives</p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Contact Number</Label>
                  <Input id="phone" type="tel" placeholder="Phone number" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="in">India</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Gender</Label>
                  <RadioGroup defaultValue="prefer-not-to-say" className="flex flex-row space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="prefer-not-to-say" id="prefer-not-to-say" />
                      <Label htmlFor="prefer-not-to-say">Prefer not to say</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-primary">Additional Options</h2>
              <p className="text-muted-foreground">Customize your donation experience</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="updates" />
                <Label htmlFor="updates">Would you like to subscribe to updates?</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" />
                <Label htmlFor="newsletter">Join our monthly newsletter</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="anonymous" />
                <Label htmlFor="anonymous">Make this donation anonymous</Label>
              </div>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <CheckCircle className="w-16 h-16 text-earth-primary mx-auto" />
              <h2 className="text-2xl font-bold text-primary">Thank You!</h2>
              <p className="text-muted-foreground">Your donation has been processed successfully</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-6 space-y-2">
              <p className="text-sm text-muted-foreground">Donation Summary</p>
              <p className="font-semibold">Amount: {donationAmount}</p>
              <p className="font-semibold">Cause: {causes.find(c => c.id === selectedCause)?.name}</p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="donate" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-primary">Help Us Change Lives</h1>
            <p className="text-lg text-muted-foreground">
              Your donation makes a real difference in communities around the world
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-soft p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 ${
                      index + 1 <= currentStep ? "text-earth-primary" : "text-muted-foreground"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        index + 1 < currentStep
                          ? "bg-earth-primary text-white"
                          : index + 1 === currentStep
                          ? "bg-earth-primary text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {index + 1 < currentStep ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <span className="text-sm hidden sm:block">{step}</span>
                  </div>
                ))}
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-earth-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / steps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Step Content */}
            <div className="mb-8">{renderStep()}</div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1 || currentStep === 5}
              >
                Previous
              </Button>
              {currentStep < 5 ? (
                <Button
                  variant="earth"
                  onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}
                  disabled={
                    (currentStep === 1 && !selectedCause) ||
                    (currentStep === 2 && !donationAmount)
                  }
                >
                  {currentStep === 4 ? "Complete Donation" : "Next"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button variant="earth" onClick={() => window.location.href = "/"}>
                  Return Home
                  <Heart className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateForm;