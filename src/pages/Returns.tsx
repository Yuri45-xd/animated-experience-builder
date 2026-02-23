import ScrollReveal from "@/components/ScrollReveal";

const Returns = () => (
  <div className="py-8 md:py-12">
    <div className="container mx-auto px-4 max-w-3xl">
      <ScrollReveal>
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6">Return Policy</h1>
        <div className="prose prose-sm text-muted-foreground space-y-4">
          <p>Last updated: February 2025</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Return Window</h2>
          <p>Returns are accepted within 7 days of delivery for damaged, defective, or incorrectly shipped items.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Non-Returnable Items</h2>
          <p>Custom gift boxes, personalized items, perishable goods (chocolates, flowers), and items marked as non-returnable cannot be returned.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Refund Process</h2>
          <p>Approved refunds are processed within 5-7 business days to the original payment method. For COD orders, refunds are credited to your bank account.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">How to Initiate a Return</h2>
          <p>Contact our team via WhatsApp or email with your order ID and photos of the issue. We'll guide you through the process.</p>
        </div>
      </ScrollReveal>
    </div>
  </div>
);

export default Returns;
