import React, { useState, useEffect } from "react";

function Categories({onCategorySelect}) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
  
    let updatedCategories
    if (e.target.checked) {
      updatedCategories= [...selectedCategories, categoryId];
    } else {
      updatedCategories= selectedCategories.filter((id) => id !== categoryId);
      
  }
  
  setSelectedCategories(updatedCategories)
  onCategorySelect(updatedCategories);
  // console.log('it is' + categories )
};


  

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
   
  }, []);
  // console.log(categories)
  return (
    <div>
      {categories.map((category) => (
        <div key={category} className="ms-3 mt-1">
          <input type="checkbox" value={category} id={`category-${category}`} onChange={handleCategoryChange}/>
          <label htmlFor={`category-${category}`}>{category}</label>
        </div>
      ))};
    </div>
  );
}

export default Categories;
