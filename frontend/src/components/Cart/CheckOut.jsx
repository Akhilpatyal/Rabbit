import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paypal from "./Paypal";

const cart = {
  products: [
    {
      name: "Stylist Jacket",
      size: "M",
      color: "Black",
      price: 100,
      image: "https://picsum.photos/500/500?random=4",
    },
    {
      name: "Stylist Jacket",
      size: "M",
      color: "Black",
      price: 100,
      image: "https://picsum.photos/500/500?random=6",
    },
  ],
  totalPrice: 195,
};

const CheckOut = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckOutId] = useState();
  const [ShippingAdd, setShippingAdd] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCheckOut = (e) => {
    e.preventDefault();
    setCheckOutId(121);
  };

  const handlePaymentSuccess = (detail) => {
    console.log("payment Success", detail);
    navigate("/order-confirmation");
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* left section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Check Out</h2>
        <form onSubmit={handleCheckOut}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={"user@example.com"}
              disabled
              className="w-full p-2 border rounded"
            />
          </div>

          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">
                {" "}
                {/* ✅ Fixed typo here */}
                First Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
                value={ShippingAdd.firstName || ""} // ✅ Ensure value is always controlled
                onChange={(e) =>
                  setShippingAdd({
                    ...ShippingAdd,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700">
                {" "}
                {/* ✅ Fixed typo here */}
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
                value={ShippingAdd.lastName || ""} // ✅ Ensure value is always controlled
                onChange={(e) =>
                  setShippingAdd({
                    ...ShippingAdd,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={ShippingAdd.address}
              onChange={(e) =>
                setShippingAdd({
                  ...ShippingAdd,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              {" "}
              {/* ✅ Fixed typo here */}
              City
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              required
              value={ShippingAdd.city || ""} // ✅ Ensure value is always controlled
              onChange={(e) =>
                setShippingAdd({
                  ...ShippingAdd,
                  city: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              {" "}
              {/* ✅ Fixed typo here */}
              Postal Code
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              required
              value={ShippingAdd.postalCode || ""} // ✅ Ensure value is always controlled
              onChange={(e) =>
                setShippingAdd({
                  ...ShippingAdd,
                  postalCode: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              value={ShippingAdd.country}
              onChange={(e) =>
                setShippingAdd({
                  ...ShippingAdd,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={ShippingAdd.phone}
              onChange={(e) =>
                setShippingAdd({
                  ...ShippingAdd,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-wrap text-white p-2 rounded"
              >
                Continue To Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg w-full bg-black text-wrap text-white text-center p-2">
                  {" "}
                  Pay With Paypal
                </h3>
                {/*paypal component  */}
                <Paypal
                  amount={100}
                  onSuccess={handlePaymentSuccess}
                  onError={(error) => alert("Payment Failed .try again")}
                />
              </div>
            )}
          </div>
        </form>
      </div>
      {/* Right Side */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summery</h3>
        <div className="border-t py-4 mb-4">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4 rounded"
                />
                <div>
                    <h3 className="text-md">{product.name}</h3>
                    <h3 className="text-gray-500">Size:{product.size}</h3>
                    <h3 className="text-gray-500">Color:{product.color}</h3>
                </div>
              </div>
                <p className="text-xl">${product.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
            <p>Subtotal:</p>
            <p>${cart.subtotal?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
            <p>Shipping</p>
            <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 boder-t pt-4">
            <p>Total</p>
            <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
