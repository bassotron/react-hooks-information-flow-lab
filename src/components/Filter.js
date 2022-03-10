import React, { useState } from "react";
import Item from "./Item"
import items from "../data/items";


function Filter({onCategoryChange}) {
const [filterdItem, setFilteredItem] = useState("All");


const itemsToDisplay = items.filter((item) => {
  if (filterdItem === "All") return true;
  setFilteredItem(item.target.value);
 return item.category === filterdItem;
});

return (

<div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
</div>
<div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
		</div>

)}





export default Filter



