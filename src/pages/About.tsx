import { Heart, Gift, Users, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-accent font-medium mb-2 tracking-widest uppercase text-sm">Our Story</p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">About GiftBox</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              GiftBox was born from a simple belief — every gift should tell a story. We're a team of passionate gifting enthusiasts who believe that the perfect present isn't just about what's inside the box; it's about the love, thought, and care that goes into creating it.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Gift, value: "50,000+", label: "Gifts Delivered" },
            { icon: Users, value: "10,000+", label: "Happy Customers" },
            { icon: Heart, value: "500+", label: "Custom Designs" },
            { icon: Star, value: "4.9", label: "Average Rating" },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center p-8 rounded-2xl bg-card shadow-card">
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="text-3xl font-heading font-bold text-accent">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">Our Mission</h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto text-lg leading-relaxed">
              To make gifting effortless, personal, and memorable. We connect you with artisans, curate premium products, and deliver happiness — one box at a time.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default About;
