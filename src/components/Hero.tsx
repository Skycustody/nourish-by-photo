import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";
import { useTranslation } from "@/hooks/useTranslation";

const Hero = () => {
  const t = useTranslation();
  
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Text content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
              {t.hero.title}{" "}
              <span className="font-normal text-primary">{t.hero.titleHighlight}</span>{" "}
              {t.hero.titleEnd}
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {t.hero.downloadButton}
              </Button>
              <Button 
                size="lg" 
                variant="ghost"
                className="px-8"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.learnMore}
              </Button>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="relative lg:ml-auto">
            <img 
              src={heroFood} 
              alt="Delicious healthy meal" 
              className="w-full h-auto rounded-lg shadow-[var(--shadow-subtle)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
