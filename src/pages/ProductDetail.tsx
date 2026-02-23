import { useParams, Link } from "react-router-dom";
import { Star, ShoppingBag, Gift, MessageCircle, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const related = products.filter((p) => p.id !== id).slice(0, 4);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-heading font-bold mb-4">Product Not Found</h1>
        <Link to="/shop"><Button className="bg-accent text-accent-foreground">Back to Shop</Button></Link>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-14 mb-20">
          <ScrollReveal>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-luxury">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col justify-center">
              {product.badge && (
                <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">{product.badge}</span>
              )}
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-3">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-accent fill-accent" />
                  <span className="font-semibold">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{product.category}</span>
              </div>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-accent">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                    <span className="text-sm font-medium text-destructive bg-destructive/10 px-2 py-0.5 rounded-full">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                A beautifully curated gift set perfect for {product.occasion.toLowerCase()} celebrations. Premium quality items carefully selected and elegantly packaged to make every moment special.
              </p>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <Button size="lg" className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full h-12">
                    <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
                  </Button>
                  <Button size="lg" variant="outline" className="border-accent/30 hover:bg-accent/10 rounded-full h-12">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
                <Button size="lg" variant="outline" className="w-full border-accent/30 hover:bg-accent/10 rounded-full h-12">
                  <Gift className="mr-2 h-5 w-5" /> Add to Gift Box
                </Button>
                <a
                  href={`https://wa.me/91XXXXXXXXXX?text=Hi, I want to customize ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="w-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 rounded-full h-12">
                    <MessageCircle className="mr-2 h-5 w-5" /> Chat for Customization
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Related */}
        <ScrollReveal>
          <h2 className="text-2xl font-heading font-bold mb-6">You May Also Like</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {related.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.05}>
              <Link to={`/shop/${p.id}`} className="group block">
                <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-luxury transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-3">
                    <h3 className="font-heading font-semibold text-sm">{p.name}</h3>
                    <span className="text-accent font-bold">₹{p.price.toLocaleString()}</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
