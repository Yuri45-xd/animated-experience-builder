import { MessageCircle, QrCode, Send, HelpCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  "Tell us what you're looking for via the form or WhatsApp",
  "Our team curates options and shares them with you",
  "Approve the selection, confirm payment",
  "We pack and deliver with love!",
];

const faqs = [
  { q: "How long does a custom order take?", a: "Most custom orders are delivered within 3-5 business days. Rush orders available for same-day delivery in select cities." },
  { q: "What's the minimum order for custom gifts?", a: "No minimum! Whether it's 1 special gift or 1000 corporate hampers, we've got you covered." },
  { q: "Can I include my own items in a gift box?", a: "Absolutely! Send us your items and we'll incorporate them into a beautifully packaged gift box." },
];

const WhatsAppConnect = () => {
  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-whatsapp/10 mb-4 mx-auto">
              <MessageCircle className="h-8 w-8 text-whatsapp" />
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-3">WhatsApp Connect</h1>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Order custom gifts directly via WhatsApp. Chat with our gifting experts for personalized recommendations.
            </p>
          </div>
        </ScrollReveal>

        {/* How it works */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl font-heading font-bold text-center mb-8">How WhatsApp Ordering Works</h2>
            <div className="space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-card">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Custom Order Form */}
        <ScrollReveal delay={0.15}>
          <div className="max-w-xl mx-auto mb-16 bg-card rounded-2xl p-8 shadow-luxury">
            <h2 className="text-2xl font-heading font-bold mb-6 text-center">Custom Gift Request</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Your Name" className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent" />
              <input placeholder="Occasion (e.g., Birthday, Wedding)" className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent" />
              <input placeholder="Budget Range (e.g., ₹1000 - ₹5000)" className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent" />
              <textarea placeholder="Describe what you'd like..." rows={4} className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
              <a href="https://wa.me/91XXXXXXXXXX?text=Custom Gift Request" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 rounded-full h-12 text-base">
                  <Send className="mr-2 h-5 w-5" /> Send to WhatsApp
                </Button>
              </a>
            </form>
          </div>
        </ScrollReveal>

        {/* FAQs */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="p-5 rounded-xl bg-card shadow-card">
                  <h3 className="font-heading font-semibold flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-accent" /> {faq.q}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default WhatsAppConnect;
