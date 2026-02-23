import { HelpCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  { q: "What is GiftBox?", a: "GiftBox is a premium gifting platform where you can shop for gifts, build custom gift boxes, and order personalized hampers for any occasion." },
  { q: "How does the Gift Box Builder work?", a: "Select your box size, pick products, choose wrapping and ribbon, add a personal message, and checkout. It's that simple!" },
  { q: "Do you offer same-day delivery?", a: "Yes! Same-day delivery is available in select cities for orders placed before 12 PM." },
  { q: "Can I order in bulk for my company?", a: "Absolutely! We offer corporate gifting solutions with branded packaging. Visit our Corporate page or chat on WhatsApp." },
  { q: "What payment methods do you accept?", a: "We accept UPI, debit/credit cards, net banking, and cash on delivery (COD)." },
  { q: "How can I track my order?", a: "Log into your account and visit 'My Orders' to track real-time status. You'll also receive WhatsApp updates." },
  { q: "What is your return policy?", a: "We accept returns within 7 days for damaged or incorrect items. Custom gift boxes are non-returnable." },
  { q: "Can I become a seller on GiftBox?", a: "Yes! Visit the Admin/Seller Dashboard section or contact us to register as a seller." },
];

const FAQ = () => {
  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-3">Frequently Asked Questions</h1>
            <p className="text-muted-foreground">Everything you need to know about GiftBox</p>
          </div>
        </ScrollReveal>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="p-5 rounded-xl bg-card shadow-card">
                <h3 className="font-heading font-semibold flex items-center gap-2 mb-2">
                  <HelpCircle className="h-4 w-4 text-accent shrink-0" /> {faq.q}
                </h3>
                <p className="text-muted-foreground text-sm pl-6">{faq.a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
