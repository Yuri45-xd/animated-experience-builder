import { LayoutDashboard, Package, ShoppingBag, Users, Star, BarChart3, Settings, Plus } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Total Products", value: "248", icon: Package, change: "+12 this week" },
  { label: "Orders Today", value: "34", icon: ShoppingBag, change: "+8 from yesterday" },
  { label: "Active Sellers", value: "56", icon: Users, change: "+3 new" },
  { label: "Revenue (MTD)", value: "₹4.8L", icon: BarChart3, change: "+22% vs last month" },
];

const recentOrders = [
  { id: "#GFT-1234", customer: "Priya S.", amount: "₹2,499", status: "Delivered", date: "Feb 22" },
  { id: "#GFT-1233", customer: "Rajesh K.", amount: "₹12,499", status: "Processing", date: "Feb 22" },
  { id: "#GFT-1232", customer: "Anita D.", amount: "₹3,499", status: "Shipped", date: "Feb 21" },
  { id: "#GFT-1231", customer: "Vikram M.", amount: "₹1,799", status: "Delivered", date: "Feb 21" },
  { id: "#GFT-1230", customer: "Meera P.", amount: "₹5,999", status: "Processing", date: "Feb 20" },
];

const Admin = () => {
  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-heading font-bold flex items-center gap-3">
                <LayoutDashboard className="h-8 w-8 text-accent" /> Admin Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">Manage your GiftBox platform</p>
            </div>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
              <Plus className="mr-2 h-4 w-4" /> Add Product
            </Button>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.05}>
              <div className="p-5 rounded-xl bg-card shadow-card">
                <div className="flex items-center justify-between mb-3">
                  <stat.icon className="h-6 w-6 text-accent" />
                  <span className="text-xs text-accent font-medium">{stat.change}</span>
                </div>
                <p className="text-2xl font-heading font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Sidebar + Recent Orders */}
        <div className="grid lg:grid-cols-4 gap-6">
          <ScrollReveal>
            <div className="space-y-2">
              {[
                { icon: LayoutDashboard, label: "Dashboard", active: true },
                { icon: Package, label: "Products" },
                { icon: ShoppingBag, label: "Orders" },
                { icon: Users, label: "Customers" },
                { icon: Users, label: "Sellers" },
                { icon: Star, label: "Reviews" },
                { icon: BarChart3, label: "Analytics" },
                { icon: Settings, label: "Settings" },
              ].map((item) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${
                    item.active ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <div className="bg-card rounded-2xl shadow-card overflow-hidden">
              <div className="p-5 border-b border-border">
                <h2 className="font-heading font-bold text-lg">Recent Orders</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase">Order ID</th>
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase">Customer</th>
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase">Amount</th>
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase">Status</th>
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-t border-border hover:bg-secondary/30 transition-colors">
                        <td className="p-4 text-sm font-medium">{order.id}</td>
                        <td className="p-4 text-sm">{order.customer}</td>
                        <td className="p-4 text-sm font-semibold text-accent">{order.amount}</td>
                        <td className="p-4">
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                            order.status === "Delivered" ? "bg-whatsapp/10 text-whatsapp" :
                            order.status === "Shipped" ? "bg-accent/10 text-accent" :
                            "bg-rose/10 text-rose"
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-muted-foreground">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Admin;
