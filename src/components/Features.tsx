import { Camera, Sparkles, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Snap a Photo",
    description: "Simply take a picture of your meal. No need to search databases or type anything manually.",
  },
  {
    icon: Sparkles,
    title: "AI Analysis",
    description: "Our advanced AI instantly recognizes your food and calculates precise calorie and macro information.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your daily nutrition goals with beautiful charts and insights. Stay on track effortlessly.",
  },
];

const Features = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps to effortless calorie tracking
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
