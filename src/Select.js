import { useState } from "react";



function Select({onSort}) {
  const handleSortChange=(e)=>{
    const selectedSort=e.target.value;
    onSort(selectedSort);
}

  return (
    <>
      <div className="mt-4 ms-2">
        <select className="form-select" aria-label="Default select example" onChange={handleSortChange}>
          <option defaultValue>Sort By</option>
          <option value="asc">
            Sort by Ascending
          </option>
          <option value="desc">
            Sort by Descending
          </option>
          <option value="hl">
            Sort by Price-High to low
          </option>
          <option value="lh"
          
        >
            Sort by Price-Low to High
          </option>
        </select>
       
      </div>
    </>
  );
}

export default Select;




