import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Gift, Truck, Heart, Star, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { products, testimonials } from "@/data/products";
import heroImage from "@/assets/hero-gifts.jpg";
import birthdayImg from "@/assets/occasion-birthday.jpg";
import anniversaryImg from "@/assets/occasion-anniversary.jpg";
import corporateImg from "@/assets/occasion-corporate.jpg";
import festivalImg from "@/assets/occasion-festival.jpg";

const occasions = [
  { name: "Birthday", image: birthdayImg, path: "/shop?occasion=birthday" },
  { name: "Anniversary", image: anniversaryImg, path: "/shop?occasion=anniversary" },
  { name: "Corporate", image: corporateImg, path: "/shop?occasion=corporate" },
  { name: "Festival", image: festivalImg, path: "/shop?occasion=festival" },
];

const steps = [
  { icon: Gift, title: "Choose Your Gifts", desc: "Browse our curated collection of premium products" },
  { icon: Heart, title: "Build Your Box", desc: "Customize your gift box with wrapping & message" },
  { icon: Truck, title: "We Deliver", desc: "Fast & safe delivery right to their doorstep" },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img src={heroImage} alt="GiftBox collection" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-medium mb-4 tracking-widest uppercase text-sm"
            >
              ✦ Smart Gifting Platform
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6"
            >
              Where Every Gift{" "}
              <span className="text-gradient-gold">Tells a Story</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-primary-foreground/70 mb-8 leading-relaxed"
            >
              Curate the perfect gift box for every occasion. Premium products, stunning packaging, personalized with love.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/shop">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 h-12 rounded-full shadow-luxury">
                  Explore Gifts <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/gift-box-builder">
                <Button size="lg" variant="outline" className="border-accent/40 text-primary-foreground hover:bg-accent/10 h-12 rounded-full px-8">
                  Build a Gift Box
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-accent font-medium mb-2 tracking-widest uppercase text-sm">Shop by Occasion</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Find the Perfect Gift</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {occasions.map((occ, i) => (
              <ScrollReveal key={occ.name} delay={i * 0.1}>
                <Link to={occ.path} className="group relative overflow-hidden rounded-2xl aspect-square shadow-card">
                  <img src={occ.image} alt={occ.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading text-xl font-bold text-primary-foreground">{occ.name}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-accent font-medium mb-2 tracking-widest uppercase text-sm">Trending Now</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Bestselling Gift Boxes</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.1}>
                <Link to={`/shop/${product.id}`} className="group block">
                  <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-luxury transition-shadow duration-300">
                    <div className="relative aspect-square overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-semibold text-lg mb-1">{product.name}</h3>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-4 w-4 text-accent fill-accent" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-muted-foreground">({product.reviews})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-accent">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/shop">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-accent font-medium mb-2 tracking-widest uppercase text-sm">Simple & Easy</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">How It Works</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.15}>
                <div className="text-center p-8 rounded-2xl bg-card shadow-card hover:shadow-luxury transition-shadow">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <step.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-accent font-bold text-sm mb-2">Step {i + 1}</div>
                  <h3 className="font-heading text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-accent font-medium mb-2 tracking-widest uppercase text-sm">What People Say</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">Happy Customers</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-primary-foreground/80 mb-4 italic">"{t.text}"</p>
                  <div>
                    <p className="font-heading font-semibold text-primary-foreground">{t.name}</p>
                    <p className="text-sm text-primary-foreground/50">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">Stay in the Loop</h2>
              <p className="text-muted-foreground mb-6">Get notified about new collections, exclusive deals, and gifting tips.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-full border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
