import { useMemo, useState } from "react";
import CartSummary from "./components/CartSummary";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAdd = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  }, [cartItems]);

  return (
    <div className="app">
      <header className="hero">
        <div>
          <p className="hero-badge">متجر اليوم</p>
          <h1>تجربة تسوق سلسة وسريعة</h1>
          <p className="hero-subtitle">
            واجهة أمامية React جاهزة للربط مع API لإدارة المنتجات والطلبات.
          </p>
        </div>
        <div className="hero-card">
          <h3>توصيل مجاني</h3>
          <p>للطلبات فوق 200 ر.س</p>
        </div>
      </header>

      <main className="content">
        <section className="products">
          <div className="section-title">
            <h2>المنتجات المقترحة</h2>
            <p>تصفح أحدث المنتجات المتوفرة الآن.</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={handleAdd} />
            ))}
          </div>
        </section>

        <CartSummary items={cartItems.length} total={total} />
      </main>

      <footer className="footer">
        <p>API جاهز للربط على المسار /api/products</p>
      </footer>
    </div>
  );
};

export default App;
