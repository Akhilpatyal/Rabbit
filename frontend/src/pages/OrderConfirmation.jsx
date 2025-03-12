const checkout = {
  _id: "12321",
  createdAt: new Date(),
  checkOutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "black",
      size: "M",
      price: 120,
      quantity: 2,
      image: "https://picsum.photos/500/500?random=8",
    },
    {
      productId: "1",
      name: "T-shirt",
      color: "black",
      size: "M",
      price: 120,
      quantity: 2,
      image: "https://picsum.photos/500/500?random=20",
    },
  ],
  shippingAddress: {
    address: "123 Fashion hub",
    city: "New York",
    country: "USA",
  },
};

const calculateEstimateDelivery = (createdAt) => {
  const orderDate = new Date(createdAt);
  orderDate.setDate(orderDate.getDate() + 10);
  return orderDate.toLocaleDateString();
};
const OrderConfirmation = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You for your order!
      </h1>
      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            <div>
              <h2 className="text-xl font-semibold">Order Id:{checkout._id}</h2>
              <p className="text-gray-500">
                Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* Estimate Delivery */}
            <div>
              <p className="text-emerald-700 text-sm">
                Estimated Delivery:{" "}
                {calculateEstimateDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>
          {/* orderItems */}
          <div className="mb-20">
            {
                checkout.checkOutItems.map((items)=>(
                    <div key={items.productId} className="flex items-center mb-4" >
                        <img src={items.image} alt={items.name} className="w-16 h-16 object-cover rounded-md mr-14" />
                        <div>

                        <h4 className="text-md font-semibold">{items.name}</h4>
                        <p className="text-sm text-gray-500">
                            {items.color} | {items.size}
                        </p>
                        </div>
                        <div className="ml-auto text-right">
                            <p className="text-md">${items.price}</p>
                            <p className="text-sm text-gray-500">Qty: {items.quantity}</p>
                        </div>
                    </div>
                ))
            }
          </div>
          {/* payment and delivery info */}
          <div className="grid grid-cols-2 gap-8">
            <div>
                <h4 className="text-lg font-semibold mb-2">Payment</h4>
                <p className="text-gray-600">PayPal</p>
            </div>
             {/* Delivery info */}
             <div>
                <h4 className="text-lg font-semibold mb-2">Delivery</h4>
                <p className="text-gray-600">{checkout.shippingAddress.address}</p>
                <p className="text-gray-600">{checkout.shippingAddress.city},{" "}</p>
                <p className="text-gray-600">{checkout.shippingAddress.country},{" "}</p>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
