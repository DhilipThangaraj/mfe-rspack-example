// import { FC } from "react";
// import { useStore } from "../store/use-store";

// const Checkout: FC = () => {
//   const cart = useStore((state) => state.cart);
//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const handleCheckout = () => {
//     alert("Checkout successful!");
//     // Handle checkout logic here
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Checkout</h1>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id} className="mb-4">
//             <h2 className="text-lg font-bold">{item.name}</h2>
//             <p className="text-gray-600">
//               ${item.price.toFixed(2)} x {item.quantity}
//             </p>
//           </li>
//         ))}
//       </ul>
//       <div className="text-right mt-4">
//         <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
//         <button
//           onClick={handleCheckout}
//           className="bg-green-500 text-white px-4 py-2 rounded mt-4"
//         >
//           Complete Purchase
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

import { FC } from "react";

const Checkout: FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <ul></ul>
      <div className="text-right mt-4">
        <p className="text-lg font-bold">Total: ${1200}</p>
        <button
          // onClick={handleCheckout}
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        >
          Complete Purchase
        </button>
      </div>
    </div>
  );
};

export default Checkout;
