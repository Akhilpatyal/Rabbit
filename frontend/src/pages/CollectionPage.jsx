import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import FilterSideBar from "../components/Products/FilterSideBar";
import SortOption from "../components/Products/SortOption";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
    const [products, setProducts] = useState([]);
    const slideRef = useRef(null);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const toggleSidebar = () => {
      setIsSideBarOpen(!isSideBarOpen);
    };
    const handleClickOutside = (e) => {
      // close sidebar if clicked outside
      if (slideRef.current && !slideRef.current.contains(e.target)) {
        setIsSideBarOpen(false);
      }
    };
    useEffect(() => {
      // add event listener for clicks
      document.addEventListener("mousedown", handleClickOutside);
      // clean event listener
      return()=>{
          document.removeEventListener("mousedown", handleClickOutside);
      }
    },[]);

  useEffect(() => {
    setTimeout(() => {
      const fetchItems = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=3" }],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=4" }],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=5" }],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 20,
          images: [{ url: "https://picsum.photos/500/500?random=6" }],
        },
        {
          _id: 5,
          name: "Product 5",
          price: 230,
          images: [{ url: "https://picsum.photos/500/500?random=10" }],
        },
        {
          _id: 6,
          name: "Product 6",
          price: 3400,
          images: [{ url: "https://picsum.photos/500/500?random=12" }],
        },
        {
          _id: 7,
          name: "Product 7",
          price: 50,
          images: [{ url: "https://picsum.photos/500/500?random=24" }],
        },
        {
          _id: 8,
          name: "Product 8",
          price: 500,
          images: [{ url: "https://picsum.photos/500/500?random=14" }],
        },
      ];
      setProducts(fetchItems);
    }, 1000);
  },[]);
  return (
    <div className="flex flex-col lg:flex-row">
      {/* mobile filter button */}
      <button onClick={toggleSidebar} className="lg:hidden border p-2 flex justify-center items-center">
        <FaFilter />Filter
      </button>
      {/* filter side bar */}
      <div  aria-hidden={!isSideBarOpen} ref={slideRef} className={`${isSideBarOpen?"translate-x-0":"-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
        <FilterSideBar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">
            All Collection
        </h2>
        {/* sort option */}
        <SortOption/>
      <ProductGrid products={products}/>
      </div>
    </div>
  );
};

export default CollectionPage;
