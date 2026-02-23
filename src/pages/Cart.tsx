import { Link } from "react-router-dom";
import { ShoppingBag, Trash2, Minus, Plus, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const Cart = () => {
  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">Your Cart</h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="text-center py-20">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
            <h2 className="font-heading text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Start adding gifts to make someone's day special!</p>
            <Link to="/shop">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8">
                Start Shopping
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Cart;
