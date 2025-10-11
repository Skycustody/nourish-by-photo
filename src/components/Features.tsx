import { Camera, Sparkles, TrendingUp } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Features = () => {
  const t = useTranslation();
  
  const features = [
    {
      icon: Camera,
      title: t.features.step1Title,
      description: t.features.step1Description,
    },
    {
      icon: Sparkles,
      title: t.features.step2Title,
      description: t.features.step2Description,
    },
    {
      icon: TrendingUp,
      title: t.features.step3Title,
      description: t.features.step3Description,
    },
  ];
  
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.features.title} <span className="text-primary">{t.features.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.features.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="h-full p-8 rounded-3xl bg-card border border-border shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-glow)] hover:border-primary/30 hover:-translate-y-2">
                {/* Number badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center shadow-lg">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
