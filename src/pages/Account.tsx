import { User, Package, Heart, MapPin, Bell, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const sections = [
  { icon: Package, title: "My Orders", desc: "Track your current and past orders", path: "#" },
  { icon: Heart, title: "Wishlist", desc: "Saved gift boxes and favorite products", path: "#" },
  { icon: MapPin, title: "Addresses", desc: "Manage your delivery addresses", path: "#" },
  { icon: Bell, title: "Reminders", desc: "Birthday & anniversary date reminders", path: "#" },
  { icon: Award, title: "Loyalty Points", desc: "Earn & redeem points on every order", path: "#" },
];

const Account = () => {
  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <User className="h-10 w-10 text-accent" />
            </div>
            <h1 className="text-3xl font-heading font-bold mb-1">My Account</h1>
            <p className="text-muted-foreground">Manage your GiftBox profile and preferences</p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {sections.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.05}>
              <Link to={s.path} className="flex items-center gap-4 p-5 rounded-xl bg-card shadow-card hover:shadow-luxury transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <s.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 text-center">
            <Button variant="outline" className="rounded-full border-destructive/30 text-destructive hover:bg-destructive/5">
              Sign Out
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Account;
