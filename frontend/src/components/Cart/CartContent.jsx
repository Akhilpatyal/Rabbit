import { RiDeleteBin3Line } from "react-icons/ri";
const CartContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "Slim Shirt",
      price: 100,
      quantity: 1,
      size: "M",
      color: "black",
      images: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Slim Shirt",
      price: 100,
      quantity: 1,
      size: "M",
      color: "black",
      images: "https://picsum.photos/200?random=1",
    },
    {
      productId: 3,
      name: "Slim Shirt",
      price: 100,
      quantity: 1,
      size: "M",
      color: "black",
      images: "https://picsum.photos/200?random=1",
    },
  ];
  return (
    <div>
{
      
      cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between border-b py-4"
        >
          <div className="flex items-start">
            <img src={product.images} alt={product.name}  className="w-20 h-24 object-center mr-4 rounded"/>
            <div>
                <h2>{product.name}</h2>
                <p className="text-sm text-gray-500">size:{product.size} | color:{product.color}</p>
                <div className="flex items-center mt-2">
                    <button className="border rounded px-2 py-1 text-xl font-medium">-</button>
                    <span className="mx-4">{product.quantity}</span>
                    <button className="border rounded px-2 py-1 text-xl font-medium">+</button>
                </div>
            </div>
          </div>
          <div>
            <p>${product.price.toLocaleString()}</p>
            <button>
            <RiDeleteBin3Line className="h-6 w-6 mt-2 text-rabbit-red"/>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
