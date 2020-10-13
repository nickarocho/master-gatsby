import { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePizza({ pizzas, inputs }) {
  // 1. Create some state to hold the order
  // We got rid of this line because we moved useState up to the provider
  // const [order, setOrder] = useState([]);
  // now we access both our state and our updater fn via context
  const [order, setOrder] = useContext(OrderContext);

  // 2. Make a function to add things to the order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }
  // 3. Make a function to remove things from the order
  function removeFromOrder(index) {
    setOrder([
      // everything BEFORE the item we want to remove
      ...order.slice(0, index),
      // everything AFTER the item we want to remove
      ...order.slice(index + 1),
    ]);
  }
  // TODO: 4. Send this to a serverless fn when they check out
  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
