import { Button } from "@/components/ui/button";
import { Apple, Check } from "lucide-react";

const benefits = [
  "AI-powered food recognition",
  "Accurate calorie tracking",
  "Macro breakdown (protein, carbs, fat)",
  "Daily goal tracking",
  "Beautiful, intuitive interface",
  "Free 3-day trial",
];

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 p-12 md:p-16 shadow-[var(--shadow-glow)]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Start Your Journey to
                <span className="block text-primary">Better Nutrition</span>
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Join thousands of users who are already tracking their nutrition effortlessly with Kalora.
              </p>
              
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg">
                <Apple className="mr-2 h-6 w-6" />
                Download for iOS
              </Button>
              
              <p className="text-sm text-muted-foreground">
                €2.99/month after 3-day free trial
              </p>
            </div>
            
            {/* Right: Benefits list */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
