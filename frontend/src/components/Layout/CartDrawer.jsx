import CartContent from "../Cart/CartContent";
import { GiCrossMark } from "react-icons/gi";
import {useNavigate} from "react-router-dom";
const CartDrawer = ({drawerOpen,toggleDrawer}) => {
 const navigate=useNavigate();
const handleCheckOut=()=>{
  toggleDrawer();
navigate("/CheckOut");
}


  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-2/4 md:w-[25rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleDrawer}>
          <GiCrossMark  className="h-6 w-6 text-gray-600"/>
        </button>
      </div>
      {/* cart cotent with scrollable area */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {/* component for cart comtents */}
        <CartContent/>
      </div>
      {/*check out button fixed at the bottom  */}
      <div className="p-4 bg-white sticky bottom-0">
        <button onClick={handleCheckOut} className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"> Check out</button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">Shipping , taxes and discount codes calculate at checkout</p>
        </div>
    </div>
  );
};

export default CartDrawer;
