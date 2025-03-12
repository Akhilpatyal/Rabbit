import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState();
  useEffect(() => {
    const mockDataDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: {
        city: "New York",
        country: "USA",
      },
      orderItems: [
        {
          productId: "1",
          name: "jacket",
          price: 100,
          quantity: 2,
          image:"https://picsum.photos/500/500?random=8"
        },
        {
          productId: "2",
          name: "T-shirt",
          price: 300,
          quantity: 1,
          image:"https://picsum.photos/500/500?random=1"
        },
      ],
    };
    setOrderDetails(mockDataDetails);
  },[id]);
  return <div className="max-w-7xl mx-auto p-4 sm:p-6">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Order Details
    </h2>
    {
        !orderDetails ?(
            <p>No Order Details foor</p>
        ):(
            <div className="p-4 sm:p-6 rounded-lg border">
                {/* order-info */}
                <div className="flex flex-col sm:flex-row justify-between mb-8">
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold">
                            Order ID:#{orderDetails._id}
                        </h3>
                        <p className="text-gray-600">
                            {new Date(orderDetails.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-4">
                        <span className={`${
                            orderDetails.isPaid ? "text-green-500" : "text-red-500"
                        } px-3 py-1 rounded-full text-sm font-medium mb-2`}> {orderDetails.isPaid?"Approved":"Pending"}</span>
                    </div>
                </div>
            </div>
        )
    }
  </div>;
};

export default OrderDetailsPage;
