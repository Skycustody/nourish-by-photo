import { Button } from "@/components/ui/button";
import { Apple, Check } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const CTA = () => {
  const t = useTranslation();
  
  const benefits = [
    t.cta.benefit1,
    t.cta.benefit2,
    t.cta.benefit3,
    t.cta.benefit4,
    t.cta.benefit5,
    t.cta.benefit6,
  ];
  
  return (
    <section className="py-32 border-t border-border">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              {t.cta.title}
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.cta.description}
            </p>
          </div>
          
          <div className="space-y-3">
            <Button size="lg" className="px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Apple className="mr-2 h-5 w-5" />
              {t.cta.downloadButton}
            </Button>
            
            <p className="text-sm text-muted-foreground">
              {t.cta.pricing}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-xl mx-auto pt-8 text-left">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-3"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
