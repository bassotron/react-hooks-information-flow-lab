import React, {useState} from "react";
import Filter from "./Filter"

function ShoppingList() {
  
  const [selectedCategory, setSelectedCategory] = useState("All");

	function handleCategoryChange(event) {
	 return setSelectedCategory(selectedCategory.target.category);
	}
  
	
	

  return (
    <div>
    
     <Filter onCategoryChange={handleCategoryChange}/>
     
    
    
    </div>
  )
}

export default ShoppingList;
