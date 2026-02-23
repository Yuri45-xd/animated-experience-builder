export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  occasion: string;
  rating: number;
  reviews: number;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Royal Gold Gift Hamper",
    price: 2499,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238f760?w=400&h=400&fit=crop",
    category: "Hampers",
    occasion: "Corporate",
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
  },
  {
    id: "2",
    name: "Birthday Surprise Box",
    price: 1299,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=400&fit=crop",
    category: "Gift Boxes",
    occasion: "Birthday",
    rating: 4.6,
    reviews: 89,
    badge: "Trending",
  },
  {
    id: "3",
    name: "Anniversary Romance Set",
    price: 3499,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    category: "Premium",
    occasion: "Anniversary",
    rating: 4.9,
    reviews: 56,
  },
  {
    id: "4",
    name: "Festival Joy Collection",
    price: 1999,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400&h=400&fit=crop",
    category: "Festival",
    occasion: "Festival",
    rating: 4.7,
    reviews: 203,
    badge: "New",
  },
  {
    id: "5",
    name: "Luxury Chocolate Tower",
    price: 1799,
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&h=400&fit=crop",
    category: "Chocolates",
    occasion: "Birthday",
    rating: 4.5,
    reviews: 67,
  },
  {
    id: "6",
    name: "Corporate Excellence Pack",
    price: 4999,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&h=400&fit=crop",
    category: "Corporate",
    occasion: "Corporate",
    rating: 4.8,
    reviews: 45,
    badge: "Premium",
  },
  {
    id: "7",
    name: "Spa & Wellness Kit",
    price: 2299,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    category: "Wellness",
    occasion: "Birthday",
    rating: 4.6,
    reviews: 78,
  },
  {
    id: "8",
    name: "Diwali Grand Hamper",
    price: 3299,
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=400&fit=crop",
    category: "Festival",
    occasion: "Festival",
    rating: 4.9,
    reviews: 312,
    badge: "Bestseller",
  },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    role: "Birthday Gift",
    text: "The custom gift box I ordered was absolutely stunning! The packaging quality exceeded my expectations. My friend was so happy!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Corporate Client",
    text: "We ordered 200 gift hampers for our employees. GiftBox handled everything professionally — from customization to delivery. Highly recommended!",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Anniversary Gift",
    text: "The WhatsApp ordering was so convenient! I got a perfectly personalized anniversary gift without any hassle. Will order again!",
    rating: 5,
  },
];
