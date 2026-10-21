"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/products";

const categories = ["All products", "Vitamins & Nutrition", "Gastrointestinal", "Bone & Joint", "Respiratory Care"];

export default function ProductBrowser({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All products");
  const visible = useMemo(() => products.filter((product) => {
    const query = search.trim().toLowerCase();
    const matchesQuery = !query || [product.name, product.ingredient, product.category, product.description].some((value) => value.toLowerCase().includes(query));
    return matchesQuery && (category === "All products" || product.category === category);
  }), [products, search, category]);

  return (
    <>
      <div className="catalog-tools">
        <label className="search-box"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg><input type="search" placeholder="Search products or ingredients" aria-label="Search products or ingredients" value={search} onChange={(event) => setSearch(event.target.value)} /></label>
        <label className="sr-only" htmlFor="category">Filter by category</label>
        <select id="category" value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select>
        <span className="result-count">{visible.length} products</span>
      </div>
      {visible.length ? <div className="product-grid">{visible.map((product, index) => (
        <article className="product-card" key={product._id}>
          <div className={`product-art product-art-${index % 4}`} aria-hidden="true">
            {product.imageUrl ? <img src={product.imageUrl} alt="" loading="lazy" /> : <><span className="art-orbit"/><span className="art-vial"><i/><i/><i/></span><span className="art-code">AB&nbsp; / &nbsp;0{index + 1}</span></>}
            {product.featured && <span className="featured-tag">Featured</span>}
          </div>
          <div className="product-info">
            <div className="product-kicker"><span>{product.category}</span><span className="product-form">{product.form}</span></div>
            <h3>{product.name}</h3><p className="ingredient">{product.ingredient} <span>·</span> {product.strength}</p>
            <p className="product-description">{product.description}</p>
            <a className="product-enquiry" href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""}?text=${encodeURIComponent(`Hello AETHER BIOTEC, I would like to enquire about ${product.name}.`)}`} target="_blank" rel="noreferrer">Enquire about product <span>↗</span></a>
          </div>
        </article>
      ))}</div> : <div className="empty-state"><span>⌕</span><h3>No products found</h3><p>Try a different search or category.</p><button onClick={() => { setSearch(""); setCategory("All products"); }}>Clear filters</button></div>}
    </>
  );
}
