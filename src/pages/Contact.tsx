import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-3">Get in Touch</h1>
            <p className="text-muted-foreground text-lg">We'd love to hear from you. Reach out via any channel below.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            { icon: Mail, title: "Email Us", info: "hello@giftbox.com", link: "mailto:hello@giftbox.com" },
            { icon: Phone, title: "Call Us", info: "+91 XXXXX XXXXX", link: "tel:+91XXXXXXXXXX" },
            { icon: MessageCircle, title: "WhatsApp", info: "Chat with us", link: "https://wa.me/91XXXXXXXXXX" },
          ].map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.1}>
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="block p-6 rounded-2xl bg-card shadow-card hover:shadow-luxury transition-shadow text-center">
                <c.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-heading font-bold mb-1">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.info}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15}>
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-center mb-6">Send us a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Your Name" className="w-full p-4 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent" />
                <input placeholder="Email" type="email" className="w-full p-4 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <input placeholder="Subject" className="w-full p-4 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent" />
              <textarea placeholder="Your message..." rows={5} className="w-full p-4 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full h-12 text-base">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Contact;
