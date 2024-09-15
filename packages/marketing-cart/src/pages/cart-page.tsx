// import { FC } from "react";
// import { useStore } from "../store/use-store";
// import { Link } from "react-router-dom";

// const Cart: FC = () => {
//   const cart = useStore((state) => state.cart);
//   const removeFromCart = useStore((state) => state.removeFromCart);

//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <ul>
//             {cart.map((item) => (
//               <li
//                 key={item.id}
//                 className="flex justify-between items-center mb-4"
//               >
//                 <div>
//                   <h2 className="text-lg font-bold">{item.name}</h2>
//                   <p className="text-gray-600">
//                     ${item.price.toFixed(2)} x {item.quantity}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <div className="text-right mt-4">
//             <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
//             <Link
//               to="/checkout"
//               className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block"
//             >
//               Proceed to Checkout
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import { FC } from "react";

const Cart: FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <p>Your cart is empty.</p>
    </div>
  );
};

export default Cart;
