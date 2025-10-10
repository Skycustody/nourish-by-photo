import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      
      {/* Hero content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Camera className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">AI-Powered Nutrition Tracking</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Track Your
              <span className="block text-primary">Calories</span>
              With a Photo
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Kalora uses advanced AI to instantly analyze your meals and provide accurate calorie counts. 
              No more manual logging – just snap, analyze, and track.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[var(--shadow-glow)] transition-all hover:scale-105">
                Download on iOS
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 border-primary/30 hover:bg-primary/10"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">4.8</div>
                <div className="text-sm text-muted-foreground">App Store Rating</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Meals Analyzed</div>
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-soft)] border-4 border-primary/20">
              <img 
                src={heroFood} 
                alt="Delicious healthy meal" 
                className="w-full h-auto"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl shadow-[var(--shadow-soft)] border border-border max-w-xs">
              <div className="text-sm text-muted-foreground mb-2">Instant Analysis</div>
              <div className="text-3xl font-bold text-primary">450 kcal</div>
              <div className="flex gap-4 mt-3 text-sm">
                <span>🥕 22g carbs</span>
                <span>🥩 35g protein</span>
                <span>🥑 18g fat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
