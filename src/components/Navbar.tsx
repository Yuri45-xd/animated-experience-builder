import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Gift, ShoppingBag, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Gift Box Builder", path: "/gift-box-builder" },
  { name: "Corporate", path: "/corporate" },
  { name: "WhatsApp Connect", path: "/whatsapp-connect" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-primary/95 backdrop-blur-md border-b border-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Gift className="h-7 w-7 text-accent" />
            <span className="font-heading text-xl font-bold text-primary-foreground md:text-2xl">
              Gift<span className="text-gradient-gold">Box</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? "text-accent bg-accent/10"
                    : "text-primary-foreground/80 hover:text-accent hover:bg-accent/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-accent hover:bg-accent/10">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-accent hover:bg-accent/10 relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                  0
                </span>
              </Button>
            </Link>
            <Link to="/account" className="hidden md:block">
              <Button variant="outline" size="sm" className="border-accent/30 text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                Account
              </Button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-primary-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-accent/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-accent bg-accent/10"
                      : "text-primary-foreground/80 hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/account" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-3 bg-accent text-accent-foreground hover:bg-accent/90">
                  My Account
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
