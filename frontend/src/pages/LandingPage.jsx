import React, { useState, useEffect } from "react";
import { fetchItems, fetchGroupedItems, createItem, updateItem, deleteItem } from "../api";
import { Trash2, Edit, Plus } from "lucide-react";

const LandingPage = () => {
  const [items, setItems] = useState([]);
  const [groupedItems, setGroupedItems] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState({ name: "", category: "", price: "" });

  useEffect(() => {
    fetchItems(search).then(setItems);
    fetchGroupedItems().then(setGroupedItems);
  }, [search]);

  const handleDelete = async (id) => {
    await deleteItem(id);
    setItems(items.filter((item) => item.id !== id));
  };

  const handleCreateOrUpdate = async () => {
    if (!formData.name || !formData.category || !formData.price) {
      alert("All fields are required!");
      return;
    }

    if (editItem) {
      const updatedItem = await updateItem(editItem.id, formData);
      setItems(items.map((item) => (item.id === editItem.id ? updatedItem : item)));
    } else {
      const newItem = await createItem(formData);
      setItems([...items, newItem]);
    }

    setShowModal(false);
    setEditItem(null);
    setFormData({ name: "", category: "", price: "" });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-md mb-4">
        <input
          type="text"
          placeholder="Search items..."
          className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => setShowModal(true)}
          className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
        >
          <Plus size={18} className="mr-1" />
          Add Item
        </button>
      </div>

      {/* Grouped Items */}
      <h2 className="text-xl font-bold my-4">Items Grouped by Category</h2>
      <ul>
        {groupedItems.map((group) => (
          <li key={group.category} className="mb-2">
            <span className="font-semibold">{group.category}:</span> {group.count} items
          </li>
        ))}
      </ul>

      {/* Data Table */}
      <div className="mt-4">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No items found
                </td>
              </tr>
            ) : (
              items.map((item, index) => (
                <tr key={item.id} className={`border-b ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-200`}>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.category}</td>
                  <td className="p-3 text-green-600 font-semibold">${item.price}</td>
                  <td className="p-3 flex space-x-2">
                    <button
                      onClick={() => {
                        setEditItem(item);
                        setFormData(item);
                        setShowModal(true);
                      }}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md flex items-center"
                    >
                      <Edit size={18} className="mr-1" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md flex items-center"
                    >
                      <Trash2 size={18} className="mr-1" />
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for Adding/Editing Items */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">{editItem ? "Edit Item" : "Add New Item"}</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded-md mb-2"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Category"
              className="w-full p-2 border rounded-md mb-2"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />
            <input
              type="number"
              placeholder="Price"
              className="w-full p-2 border rounded-md mb-2"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
            <div className="flex justify-end mt-4">
              <button onClick={() => setShowModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2">
                Cancel
              </button>
              <button onClick={handleCreateOrUpdate} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                {editItem ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
