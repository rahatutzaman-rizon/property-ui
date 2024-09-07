"use client"

import { useState } from 'react';

const demoItems = [
  { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
  { id: 2, name: 'Shirt', price: 29, category: 'Clothing' },
  { id: 3, name: 'Coffee Maker', price: 89, category: 'Electronics' },
  { id: 4, name: 'Sofa', price: 499, category: 'Furniture' },
  { id: 5, name: 'Book', price: 15, category: 'Books' },
  { id: 6, name: 'Smartphone', price: 699, category: 'Electronics' },
  // Add more demo items if needed
];

const Dashboard = () => {
  const [items, setItems] = useState(demoItems);
  const [filteredItems, setFilteredItems] = useState(demoItems);
  const [filter, setFilter] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [category, setCategory] = useState('');

  const applyFilters = () => {
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()) &&
      item.price >= minPrice &&
      item.price <= maxPrice &&
      (category ? item.category === category : true)
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Filter Form */}
      <div className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          onKeyUp={applyFilters}
          className="border border-gray-300 p-2 rounded-md w-full"
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          onKeyUp={applyFilters}
          className="border border-gray-300 p-2 rounded-md w-full"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          onKeyUp={applyFilters}
          className="border border-gray-300 p-2 rounded-md w-full"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          onBlur={applyFilters}
          className="border border-gray-300 p-2 rounded-md w-full"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Furniture">Furniture</option>
          <option value="Books">Books</option>
        </select>
      </div>

      {/* Display Filtered Items */}
      <ul className="list-disc pl-5 space-y-2">
        {filteredItems.map(item => (
          <li key={item.id} className="bg-gray-100 p-4 rounded-md shadow-md">
            <div className="font-semibold">{item.name}</div>
            <div className="text-gray-600">Price: ${item.price}</div>
            <div className="text-gray-600">Category: {item.category}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
