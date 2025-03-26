import React, { useState, useEffect } from "react";
import { fetchItems, createItem, deleteItem } from "../api";
import { Trash2, Plus } from "lucide-react";

const ItemTable = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newItem, setNewItem] = useState({ name: "", category: "", price: "" });

  useEffect(() => {
    fetchItems(search).then(setItems);
  }, [search]);

  const handleDelete = async (id) => {
    await deleteItem(id);
    setItems(items.filter((item) => item.id !== id));
  };

  const handleCreate = async () => {
    if (!newItem.name || !newItem.category || !newItem.price) {
      alert("All fields are required!");
      return;
    }
    const addedItem = await createItem(newItem);
    setItems([...items, addedItem]);
    setNewItem({ name: "", category: "", price: "" });
    setShowModal(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Top Section: Search & Add Button */}
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

      {/* Table for Large Screens */}
      <div className="hidden md:block">
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
                <tr
                  key={item.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.category}</td>
                  <td className="p-3 text-green-600 font-semibold">
                    ${item.price}
                  </td>
                  <td className="p-3">
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

      {/* Card View for Mobile */}
      <div className="md:hidden space-y-4">
        {items.length === 0 ? (
          <p className="text-center text-gray-500">No items found</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg p-4 rounded-lg border-l-4 border-blue-500"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-gray-600">Category: {item.category}</p>
              <p className="text-green-600 font-semibold">Price: ${item.price}</p>
              <button
                onClick={() => handleDelete(item.id)}
                className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md w-full flex items-center justify-center"
              >
                <Trash2 size={18} className="mr-2" />
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {/* Modal for Adding Items */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded-md mb-2"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Category"
              className="w-full p-2 border rounded-md mb-2"
              value={newItem.category}
              onChange={(e) =>
                setNewItem({ ...newItem, category: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Price"
              className="w-full p-2 border rounded-md mb-2"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemTable;
