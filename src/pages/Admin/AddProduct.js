import { useState } from "react";
import axios from "axios";
import "./addProduct.css";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    stock: "",
  });
  const [image, setImage] = useState(null);

  const upload = async () => {
    // Validasi dasar
    if (!form.name.trim()) {
      alert("Product name is required");
      return;
    }
    if (!image) {
      alert("Please select an image");
      return;
    }

    try {
      const formData = new FormData();

      // Tambahkan field form
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // Rename file sesuai nama produk (replace spasi dengan '-')
      formData.append("image", image);

      await axios.post("http://localhost:5000/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product uploaded");

      // Reset form setelah upload
      setForm({
        name: "",
        price: "",
        description: "",
        category: "",
        stock: "",
      });
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("Failed to upload product");
    }
  };

  return (
    <div className="add-product-container">
      <div className="add-product-card">
        <h2>Add New Product</h2>

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <input
          placeholder="Stock"
          type="number"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input type="file" onChange={(e) => setImage(e.target.files[0])} />

        <button onClick={upload}>Upload</button>
      </div>
    </div>
  );
}