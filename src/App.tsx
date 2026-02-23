import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import GiftBoxBuilder from "./pages/GiftBoxBuilder";
import Cart from "./pages/Cart";
import Corporate from "./pages/Corporate";
import WhatsAppConnect from "./pages/WhatsAppConnect";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Admin from "./pages/Admin";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Returns from "./pages/Returns";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
            <Route path="/gift-box-builder" element={<GiftBoxBuilder />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/whatsapp-connect" element={<WhatsAppConnect />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/returns" element={<Returns />} />
            {/* Catch-all redirects to home */}
            <Route path="*" element={<Index />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
