import { Link } from "react-router-dom";
import { Gift, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Gift className="h-7 w-7 text-accent" />
              <span className="font-heading text-2xl font-bold">
                Gift<span className="text-gradient-gold">Box</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Where Every Gift Tells a Story. Premium gifting experiences crafted with love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "Shop All", path: "/shop" },
                { name: "Gift Box Builder", path: "/gift-box-builder" },
                { name: "Corporate Gifting", path: "/corporate" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="block text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-accent">Help</h4>
            <div className="space-y-2">
              {[
                { name: "FAQ", path: "/faq" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms & Conditions", path: "/terms" },
                { name: "Return Policy", path: "/returns" },
                { name: "Seller Dashboard", path: "/admin" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="block text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-accent">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 text-accent" />
                hello@giftbox.com
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 text-accent" />
                +91 XXXXX XXXXX
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-accent" />
                Mumbai, India
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
          © 2025 GiftBox. All rights reserved. Where Every Gift Tells a Story.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
