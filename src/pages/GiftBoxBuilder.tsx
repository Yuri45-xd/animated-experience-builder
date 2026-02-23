import { useState } from "react";
import { Gift, Plus, Minus, MessageCircle, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/data/products";

const boxSizes = [
  { name: "Small", items: 3, price: 299, desc: "3 items" },
  { name: "Medium", items: 5, price: 499, desc: "5 items" },
  { name: "Large", items: 8, price: 799, desc: "8 items" },
];

const wrappingStyles = ["Classic Gold", "Royal Purple", "Festive Red", "Elegant White"];

const GiftBoxBuilder = () => {
  const [selectedSize, setSelectedSize] = useState(1);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [wrapping, setWrapping] = useState(wrappingStyles[0]);
  const [message, setMessage] = useState("");

  const maxItems = boxSizes[selectedSize].items;
  const itemsTotal = selectedItems.reduce((sum, id) => {
    const p = products.find((pr) => pr.id === id);
    return sum + (p?.price || 0);
  }, 0);
  const total = itemsTotal + boxSizes[selectedSize].price;

  const toggleItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((i) => i !== id));
    } else if (selectedItems.length < maxItems) {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-accent font-medium mb-2 tracking-widest uppercase text-sm">
              <Gift className="h-4 w-4" /> Custom Builder
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold">Build Your Gift Box</h1>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Create a personalized gift box by selecting products, choosing your wrapping, and adding a heartfelt message.</p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Product selection */}
          <div className="lg:col-span-2 space-y-8">
            {/* Box Size */}
            <ScrollReveal>
              <h2 className="font-heading text-xl font-bold mb-4">1. Choose Box Size</h2>
              <div className="grid grid-cols-3 gap-4">
                {boxSizes.map((size, i) => (
                  <button
                    key={size.name}
                    onClick={() => { setSelectedSize(i); setSelectedItems([]); }}
                    className={`p-4 rounded-xl border-2 text-center transition-all ${
                      selectedSize === i ? "border-accent bg-accent/5 shadow-luxury" : "border-border hover:border-accent/30"
                    }`}
                  >
                    <Gift className={`h-8 w-8 mx-auto mb-2 ${selectedSize === i ? "text-accent" : "text-muted-foreground"}`} />
                    <p className="font-heading font-bold">{size.name}</p>
                    <p className="text-xs text-muted-foreground">{size.desc}</p>
                    <p className="text-sm font-semibold text-accent mt-1">+₹{size.price}</p>
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Products */}
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-xl font-bold mb-1">2. Select Products ({selectedItems.length}/{maxItems})</h2>
              <p className="text-sm text-muted-foreground mb-4">Click to add or remove items from your box</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {products.map((p) => {
                  const isSelected = selectedItems.includes(p.id);
                  return (
                    <button
                      key={p.id}
                      onClick={() => toggleItem(p.id)}
                      disabled={!isSelected && selectedItems.length >= maxItems}
                      className={`relative rounded-xl overflow-hidden border-2 transition-all text-left ${
                        isSelected ? "border-accent shadow-luxury" : "border-border hover:border-accent/30 disabled:opacity-40"
                      }`}
                    >
                      <div className="aspect-square overflow-hidden">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-2">
                        <p className="text-xs font-semibold truncate">{p.name}</p>
                        <p className="text-xs text-accent font-bold">₹{p.price.toLocaleString()}</p>
                      </div>
                      {isSelected && (
                        <div className="absolute top-2 right-2 bg-accent text-accent-foreground rounded-full h-6 w-6 flex items-center justify-center">
                          <X className="h-3 w-3" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Wrapping & Message */}
            <ScrollReveal delay={0.15}>
              <h2 className="font-heading text-xl font-bold mb-4">3. Customize</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Wrapping Style</label>
                  <div className="flex flex-wrap gap-2">
                    {wrappingStyles.map((w) => (
                      <button
                        key={w}
                        onClick={() => setWrapping(w)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          wrapping === w ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
                        }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Personal Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write a heartfelt message for the recipient..."
                    rows={3}
                    className="w-full p-4 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Summary */}
          <ScrollReveal delay={0.2}>
            <div className="bg-card rounded-2xl p-6 shadow-luxury sticky top-24 space-y-4">
              <h3 className="font-heading text-xl font-bold flex items-center gap-2">
                <Gift className="h-5 w-5 text-accent" /> Your Gift Box
              </h3>
              <div className="divide-y divide-border">
                <div className="py-3 flex justify-between text-sm">
                  <span className="text-muted-foreground">{boxSizes[selectedSize].name} Box</span>
                  <span className="font-medium">₹{boxSizes[selectedSize].price}</span>
                </div>
                {selectedItems.map((id) => {
                  const p = products.find((pr) => pr.id === id);
                  return p ? (
                    <div key={id} className="py-3 flex justify-between text-sm">
                      <span className="text-muted-foreground truncate mr-2">{p.name}</span>
                      <span className="font-medium shrink-0">₹{p.price.toLocaleString()}</span>
                    </div>
                  ) : null;
                })}
                <div className="py-3 flex justify-between text-sm">
                  <span className="text-muted-foreground">Wrapping: {wrapping}</span>
                  <span className="font-medium text-accent">Free</span>
                </div>
              </div>
              <div className="pt-3 border-t border-border flex justify-between items-baseline">
                <span className="font-heading font-bold text-lg">Total</span>
                <span className="font-heading font-bold text-2xl text-accent">₹{total.toLocaleString()}</span>
              </div>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full h-12 text-base">
                <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
              <a href={`https://wa.me/91XXXXXXXXXX?text=Custom Gift Box: ${selectedItems.length} items, ${wrapping} wrapping. Message: ${message}`} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 rounded-full h-12 text-base mt-2">
                  <MessageCircle className="mr-2 h-5 w-5" /> Send via WhatsApp
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default GiftBoxBuilder;
