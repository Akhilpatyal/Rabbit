import { useEffect, useState } from "react";
import {toast} from "sonner"
import ProductGrid from "./ProductGrid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// update during integration

const ProductDetails = ({productId}) => {
  const {id}=useParams();
  const dispatch=useDispatch();
  const {selectedProduct,loading,error,similarProducts}=useSelector(
    (state)=>state.products
  );
  const [mainImage, setMainImage] = useState("https://picsum.photos/500/500?random=6");

  const [selectedSize,setSelectedSize]=useState("");
  const [selectedColor,setSelectedColor]=useState("");
  const [Quantity,setQuantity]=useState(1);
  const [isButtonDisable,setIsButtonDisable]=useState(false);

  const handleAddToCart=()=>{
    if(!selectedSize || !selectedColor){
      toast.error("Please select a size and color before adding to cart",{
        duration:1000,
      });
      return;
    }
    setIsButtonDisable(true);
    setTimeout(()=>{
      toast.success("Product added successfully",{
        duration:1000,
      })
      setIsButtonDisable(false);

    },500);
  }
  useEffect(()=>{
    if(selectedProducts?.images?.length>0){
      setMainImage(selectedProducts.images[0].url);
    }
   
  },[selectedProducts]);
  const handleQuantityChange=(action)=>{
    if(action ==="plus") setQuantity((prev)=>prev+1);
    if(action ==="minus" && Quantity>1) setQuantity((prev)=>prev-1);
  }
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bh-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/*  */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProducts.images.map((images, index) => (
              <img
                key={index}
                src={images.url}
                alt={images.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage===images.url?"border-black":"border-gray-300"}`}
                  onClick={()=>setMainImage(images.url)}
                />
            ))}
          </div>
          {/* main */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt=""
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* mobile thumbnail */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProducts.images.map((images, index) => (
              <img
                key={index}
                src={images.url}
                alt={images.altText}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage===images.url?"border-black":"border-gray-300"}`}
                onClick={()=>setMainImage(images.url)}
              />
            ))}
          </div>
          {/* right side */}
          <div className="md:w-1/2 md:ml-10">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            {selectedProducts.name}
          </h1>
          <p className="text-lg text-gray-600 mb-1 line-through">
            {selectedProducts.price && `$${selectedProducts.originalPrice}`}
          </p>
          <p className="text-xl text-gray-500 mb-2">
            ${selectedProducts.price}
          </p>
          <p className="text-gray-600 mb-4">
            {selectedProducts.description}
          </p>
          <div className="mb-4">
            <p className="text-gray-7000">
              color:
            </p>
          <div className="flex gap-2 mt-2">
            {selectedProducts.colors.map((color)=>(
              <button
              key={color}
              onClick={()=>setSelectedColor(color)}
              className={`w-8 h-8 rounded-full border ${selectedColor===color ? "border-2 border-black":"border-gray-200"}`}
              style={{backgroundColor:color.toLocaleLowerCase(),
                filter:"brightness(0.5)",
              }}
              >
              </button>
            ))}
          </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-700">Sizes:</p>
            <div className="flex gap-2 mt-2">
            {selectedProducts.sizes.map((sizes) => (
             <button key={sizes} onClick={()=>setSelectedSize(sizes)} className={`px-4 py-2 rounded border ${selectedSize===sizes ? "bg-black text-white" :""}`}>
              {sizes}
             </button>
            ))}
            </div>
          </div>
          <div className="mb-6">
            <p className="text-gray-700">Quantity:</p>
            <div className="flex items-center space-x-4 mt-2">
              <button className="px-2 py-1 bg-gray-200 rounded text-lg" onClick={()=>handleQuantityChange("minus") }>-</button>
              <span className="text-lg">{Quantity}</span>
              <button className="px-2 py-1 bg-gray-200 rounded text-lg" onClick={()=>handleQuantityChange("plus") }>+</button>
            </div>
          </div>
          <button disabled={isButtonDisable}  onClick={()=>handleAddToCart()} className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisable?"cursor-not-allowed opacity-50":"hover:bg-gray-900"}`}>{isButtonDisable?"Adding....":"Add To Cart"}</button>
          <div className="mt-10 text-gray-700">
            <h3 className="text-xl font-bold mb-4">Characterstics:</h3>
            <table className="w-full text-left text-sm text-gray-600">
              <tbody>
                <tr>
                  <td className="py-1">Brand</td>
                  <td className="py-1">{selectedProducts.brand}</td>
                </tr>
                <tr>
                <td className="py-1">Material</td>
                <td className="py-1">{selectedProducts.material}</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts}/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;


// i am using sonner for toast library