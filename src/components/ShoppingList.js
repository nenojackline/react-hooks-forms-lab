import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemSubmission }) {
  const [searchTerm, setSearchTerm] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
  // categories
  .filter(
    item => selectedCategory === "All" || item.category === selectedCategory
  )
  // searchterm
  .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  console.log(searchTerm)

  return (
    <div className="ShoppingList">
      <ItemForm onItemSubmission={onItemSubmission}/>
      <Filter onCategoryChange={handleCategoryChange} searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
