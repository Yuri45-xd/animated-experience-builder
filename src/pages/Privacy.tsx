import ScrollReveal from "@/components/ScrollReveal";

const Privacy = () => (
  <div className="py-8 md:py-12">
    <div className="container mx-auto px-4 max-w-3xl">
      <ScrollReveal>
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6">Privacy Policy</h1>
        <div className="prose prose-sm text-muted-foreground space-y-4">
          <p>Last updated: February 2025</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Information We Collect</h2>
          <p>We collect information you provide directly, such as name, email, phone number, shipping address, and payment details when you make a purchase.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">How We Use Your Information</h2>
          <p>Your information is used to process orders, provide customer support, send order updates via WhatsApp, and improve our services.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information. Payment processing is handled by trusted third-party payment gateways.</p>
          <h2 className="font-heading text-xl font-bold text-foreground">Contact Us</h2>
          <p>For any privacy-related questions, reach out to us at hello@giftbox.com or via WhatsApp.</p>
        </div>
      </ScrollReveal>
    </div>
  </div>
);

export default Privacy;
