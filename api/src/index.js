import cors from "cors";
import express from "express";
import { products } from "./data/products.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "خدمة المتجر تعمل",
    endpoints: ["/api/products", "/api/cart/summary"]
  });
});

app.get("/api/products", (req, res) => {
  res.json({
    count: products.length,
    items: products
  });
});

app.get("/api/cart/summary", (req, res) => {
  res.json({
    items: 2,
    total: 740,
    currency: "SAR"
  });
});

const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
