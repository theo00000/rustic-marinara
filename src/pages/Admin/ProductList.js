import { useEffect, useState } from "react";
import axios from "axios";
import "./productList.css";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch products");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert("Failed to delete product");
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/products/${id}`,
        editForm
      );
      setEditingId(null);
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert("Failed to update product");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-table">
      <h2>Product List</h2>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>
                <img
                  src={`http://localhost:5000${p.image || "/no-image.png"}`}
                  alt={p.name}
                  width="60"
                />
              </td>

              {/* NAME */}
              <td>
                {editingId === p._id ? (
                  <input
                    value={editForm.name}
                    onChange={(e) =>
                      setEditForm({ ...editForm, name: e.target.value })
                    }
                  />
                ) : (
                  p.name
                )}
              </td>

              {/* PRICE */}
              <td>
                {editingId === p._id ? (
                  <input
                    type="number"
                    value={editForm.price}
                    onChange={(e) =>
                      setEditForm({ ...editForm, price: e.target.value })
                    }
                  />
                ) : (
                  `Rp ${p.price}`
                )}
              </td>

              {/* STOCK */}
              <td>
                {editingId === p._id ? (
                  <input
                    type="number"
                    value={editForm.stock}
                    onChange={(e) =>
                      setEditForm({ ...editForm, stock: e.target.value })
                    }
                  />
                ) : (
                  p.stock
                )}
              </td>

              {/* ACTION */}
              <td>
                {editingId === p._id ? (
                  <>
                    <button onClick={() => handleUpdate(p._id)}>
                      Save
                    </button>
                    <button onClick={() => setEditingId(null)}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn-edit"
                      onClick={() => {
                        setEditingId(p._id);
                        setEditForm({
                          name: p.name,
                          price: p.price,
                          stock: p.stock,
                        });
                      }}
                    >
                      Edit
                    </button>

                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(p._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
