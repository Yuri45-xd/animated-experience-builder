import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20GiftBox%20products!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-whatsapp-foreground" fill="currentColor" />
    </motion.a>
  );
};

export default WhatsAppButton;
