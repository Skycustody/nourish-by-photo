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
    <section id="how-it-works" className="py-32">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
            {t.features.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.features.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-16 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center space-y-4"
            >
              <div className="flex justify-center mb-6">
                <feature.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-normal">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
