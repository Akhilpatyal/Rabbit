import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    colors: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });
  const [priceRange, setPriceRange] = useState(0, 100);
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Green",
    "Yellow",
    "Black",
    "Pink",
    "wheat",
    "Navy",
    "Gray",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Layon",
    "Viscore",
    "Fleece",
  ];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];

  const genders = ["Men", "Women"];
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  const handleFilterChange = (event) => {
    const { name, value,checked,type } = event.target;
    let newFilter={...filter}
    if(type==="checkbox"){
      if(checked){
        newFilter[name]=[...(newFilter[name] || []),value ]
      }else{
        newFilter[name]=newFilter[name].filter(item=>item!==value)
      }
    }
    else{
      newFilter[name]=value;
    }
    setFilter(newFilter);
    console.log(newFilter);
    
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>
      {/* category Filter */}
      <div className="mb-6">
        <lable className="text-gray-600 block font-medium mb-2">
      
          Category
        </lable>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>
      {/* Gender Filter */}
      <div className="mb-6">
        <lable className="text-gray-600 block font-medium mb-2">
      
          Gender
        </lable>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{gender}</span>
         
          </div>
        ))}
      </div>
      {/* Colors Filter */}
      <div className="mb-6">
        <label className="text-gray-600 block font-medium mb-2">
      
          Colors
        </label>
        <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
           <button
           value={color}
           key={color} name="color" className=" w-8 h-8 border border-gray-300 rounded-xl cursor-pointer transition hover:scale-105" 
           onClick={handleFilterChange}
           style={{background:color.toLowerCase()}}>

           </button>
         
        ))}
        </div>
      </div>
      {/* Sizes Filter */}
      <div className="mb-6">
        <lable className="text-gray-600 block font-medium mb-2">
      
          Sizes
        </lable>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{size}</span>
         
          </div>
        ))}
      </div>
      {/* Brands Filter */}
      <div className="mb-6">
        <lable className="text-gray-600 block font-medium mb-2">
      
          Brands
        </lable>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{brand}</span>
         
          </div>
        ))}
      </div>
      {/* materials Filter */}
      <div className="mb-6">
        <lable className="text-gray-600 block font-medium mb-2">
      
        Material
        </lable>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={material}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{material}</span>
         
          </div>
        ))}
      </div>
      {/* Price Range Filter */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input type="range" name="priceRange" min={0} max={100} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSideBar;
