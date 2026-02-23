import { Building2, Users, Package, Palette, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const benefits = [
  { icon: Package, title: "Bulk Orders", desc: "Custom quantities from 50 to 10,000+ gift hampers" },
  { icon: Palette, title: "Branded Packaging", desc: "Your logo, colors, and messaging on premium gift boxes" },
  { icon: Users, title: "Dedicated Manager", desc: "Personal account manager for seamless coordination" },
  { icon: Building2, title: "Pan-India Delivery", desc: "Reliable delivery to multiple locations simultaneously" },
];

const Corporate = () => {
  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <ScrollReveal>
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-16 text-center mb-16">
            <p className="text-accent font-medium mb-3 tracking-widest uppercase text-sm">For Businesses</p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Corporate Gifting Solutions</h1>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8 text-lg">
              Impress employees, clients, and partners with premium custom gift hampers. Bulk orders, branded packaging, and hassle-free delivery.
            </p>
            <a href="https://wa.me/91XXXXXXXXXX?text=Hi, I'm interested in corporate gifting solutions." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 h-12">
                <MessageCircle className="mr-2 h-5 w-5" /> Enquire on WhatsApp
              </Button>
            </a>
          </div>
        </ScrollReveal>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-card shadow-card text-center">
                <b.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Enquiry Form */}
        <ScrollReveal>
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-center mb-6">Request a Quote</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Company Name" className="w-full p-4 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent" />
              <input placeholder="Contact Person" className="w-full p-4 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent" />
              <input placeholder="Email Address" type="email" className="w-full p-4 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent" />
              <input placeholder="Phone Number" className="w-full p-4 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent" />
              <input placeholder="Approximate Quantity (e.g., 200)" className="w-full p-4 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent" />
              <textarea placeholder="Describe your requirements..." rows={4} className="w-full p-4 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full h-12 text-base">
                Submit Enquiry <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Corporate;
