import { useState } from "react";
import Home from "./components/pages/Home.tsx";
import Products from "./components/pages/Products.tsx";
import Cart from "./components/pages/Cart.tsx";
import type { Product, CartItem } from "./types.ts";

const products: Product[] = [
  {
    id: 1,
    name: "Morning Mist Candle",
    description:
      "A gentle eucalyptus and lavender blend in clean white ceramic. Burns for 45 hours of pure tranquility.",
    price: 28,
    category: "silence",
    image: "/image.png",
  },
  {
    id: 2,
    name: "Whispered Dreams Journal",
    description:
      "Soft cream leather-bound notebook with dotted pages. Perfect for quiet reflections and mindful writing.",
    price: 22,
    category: "silence",
    image: "/image.png",
  },
  {
    id: 3,
    name: "Inner Peace Affirmations",
    description:
      "50 minimalist cards with gentle reminders for daily calm. Understated typography on matte finish.",
    price: 18,
    category: "silence",
    image: "/image.png",
  },
  {
    id: 4,
    name: "Serenity Sage Candle",
    description:
      "White sage and vanilla in a frosted glass vessel. Clean burning soy wax for meditation moments.",
    price: 32,
    category: "silence",
    image: "/image.png",
  },
  {
    id: 5,
    name: "Quiet Thoughts Notebook",
    description:
      "Minimalist grey cover with blank pages. Made from sustainable bamboo paper for conscious creators.",
    price: 16,
    category: "silence",
    image: "/image.png",
  },
  {
    id: 6,
    name: "Peach Burst Candle",
    description:
      "Explosive peach and citrus energy in electric orange packaging. Bold fragrance that fills any room with life.",
    price: 30,
    category: "noise",
    image: "/image.png",
  },
  {
    id: 7,
    name: "Rebel Spirit Journal",
    description:
      "Vibrant artistic cover with mixed media collage. Thick pages ready for your wildest creative expressions.",
    price: 25,
    category: "noise",
    image: "/image.png",
  },
  {
    id: 8,
    name: "Power Up Affirmations",
    description:
      "50 dynamic cards with bold motivational slogans. High-contrast design to fuel your ambitious mindset.",
    price: 20,
    category: "noise",
    image: "/image.png",
  },
  {
    id: 9,
    name: "Electric Dreams Candle",
    description:
      "Lightning-bright bergamot and mint in neon blue ceramic. An energizing scent for creative breakthroughs.",
    price: 34,
    category: "noise",
    image: "/image.png",
  },
  {
    id: 10,
    name: "Wild Expression Notebook",
    description:
      "Graffiti-inspired cover art with graph paper inside. For the artists, dreamers, and rule-breakers.",
    price: 19,
    category: "noise",
    image: "/image.png",
  },
  {
    id: 11,
    name: "Sunset Blaze Candle",
    description:
      "Tropical mango and passion fruit in gradient pink-to-orange vessel. Summer vibes all year round.",
    price: 29,
    category: "noise",
    image: "/image.png",
  },
  {
    id: 12,
    name: "Calm Waters Affirmations",
    description:
      "Gentle self-care reminders in soft blue packaging. Elegant script typography for peaceful moments.",
    price: 17,
    category: "silence",
    image: "/image.png",
  },
];

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const addCartItem = (cartItem: CartItem) => {
    setCartItems((prev) => {
      const exists = prev.find(
        (item) => item.product.id === cartItem.product.id
      );

      if (exists) {
        return prev.map((item) =>
          item.product.id === cartItem.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, cartItem];
    });
  };

  const decrementCartItem = (id: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) =>
          item.product.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const removeCartItem = (id: number) => {
    setCartItems((prev) => {
      return prev.filter((item) => item.product.id !== id);
    });
  };

  const getTotalCartItems = () => {
    let totalCartItems = 0;

    for (let i: number = 0; i < cartItems.length; i++) {
      totalCartItems = totalCartItems + cartItems[i].quantity;
    }

    return totalCartItems;
  };

  return (
    <>
      <header className="w-100 d-flex justify-content-between align-items-center">
        <div className="d-flex gap-5 align-items-center">
          <img
            className="logo-img"
            src="/logo.png"
            alt="Silence & Noise Logo"
          />
        </div>
        <div className="nav d-flex gap-2">
          <button
            className="nav-btn btn btn-outline-dark p-1"
            onClick={() => setCurrentPage("home")}
          >
            Home
          </button>
          <button
            className="nav-btn btn btn-outline-dark p-1"
            onClick={() => setCurrentPage("products")}
          >
            Products
          </button>
          <button
            className="nav-btn btn btn-outline-dark p-1 d-flex gap-2 align-items-center justify-content-center"
            onClick={() => setCurrentPage("cart")}
          >
            <i className="bi bi-bag"></i>Cart ({getTotalCartItems()})
          </button>
        </div>
      </header>

      <main className="flex-grow-1 d-flex flex-column ">
        {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === "products" && (
          <Products
            products={filteredProducts}
            onAddCartItem={addCartItem}
            search={search}
            onSearch={setSearch}
            category={category}
            onCategory={setCategory}
          />
        )}
        {currentPage === "cart" && (
          <Cart
            cartItems={cartItems}
            totalCartItems={getTotalCartItems()}
            onAddCartItem={addCartItem}
            onDecrementCartItem={decrementCartItem}
            onRemoveCartItem={removeCartItem}
          />
        )}
      </main>

      <footer className="w-100 d-flex flex-column align-items-center p-5 gap-5">
        <div className="nav d-flex justify-content-center align-items-center gap-2">
          <button
            className="footer-nav-btn btn btn-outline-light p-1"
            onClick={() => setCurrentPage("home")}
          >
            Home
          </button>
          <button
            className="footer-nav-btn btn btn-outline-light p-1"
            onClick={() => setCurrentPage("products")}
          >
            Products
          </button>
          <button
            className="footer-nav-btn btn btn-outline-light p-1 d-flex gap-2 align-items-center justify-content-center"
            onClick={() => setCurrentPage("cart")}
          >
            <i className="bi bi-bag"></i>Cart ({getTotalCartItems()})
          </button>
        </div>

        <div>
          <p id="copyright">© 2025, SilenceAndNoise.com</p>
        </div>
      </footer>
    </>
  );
};

export default App;
