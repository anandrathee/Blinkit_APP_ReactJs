import React, { useState } from 'react'


const FilterProducts = ({handleSelect, selectedCategory}) => {

  // const [selectedCategory, setSelectedCategory] = useState('Items');


  return (
   
      <div className="flex w-full items-center justify-center gap-2 mt-10 h-12">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-[1.5vw] font-semibold">{selectedCategory} Products</h1>
        </div>
        <label className="font-semibold w-[15vw] text-[1.2vw]" htmlFor="category">
          Choose a category:{" "}
        </label>
        <select
          onChange={(e) => handleSelect(e.target.value)}
          id="category"
          className="rounded text-white py-2 px-3 font-semibold bg-green-700 outline-none"
        >
          <option value="All">ALL</option>
          <option value="Baby Care">Baby Care</option>
          <option value="Pet Care">Pet Care</option>
          <option value="Dairy">Dairy</option>
          <option value="Pharmacy">Pharmacy</option>
        </select>


        
      </div>
  );
};

export default FilterProducts;
