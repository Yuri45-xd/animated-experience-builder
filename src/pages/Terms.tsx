import ScrollReveal from "@/components/ScrollReveal";

const Terms = () => (
  <div className="py-8 md:py-12">
    <div className="container mx-auto px-4 max-w-3xl">
      <ScrollReveal>
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6">Terms & Conditions</h1>
        <div className="prose prose-sm text-muted-foreground space-y-4">
          <p>Last updated: February 2025</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Use of Services</h2>
          <p>By using GiftBox, you agree to these terms. Our platform is for personal and commercial gifting purposes.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Orders & Payments</h2>
          <p>All prices are in Indian Rupees (INR). Orders are confirmed once payment is processed. We reserve the right to cancel suspicious orders.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Delivery</h2>
          <p>Delivery timelines vary by location. Standard delivery takes 3-5 business days. Express and same-day options are available in select cities.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Intellectual Property</h2>
          <p>All content on GiftBox is protected by copyright. You may not reproduce, distribute, or create derivative works without permission.</p>
        </div>
      </ScrollReveal>
    </div>
  </div>
);

export default Terms;
