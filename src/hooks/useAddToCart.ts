import {
  addToCart,
  removeFromCart,
} from "../redux_manager/slices/cartCountSlice";
import { useAppDispatch } from "./reduxHooks";

export const useAddToCart = () => {
  const dispatch = useAppDispatch();
  // Define the functions with proper dispatch typing
  const addItemToCart = () => dispatch(addToCart());
  const removeItemFromCart = () => dispatch(removeFromCart());

  return { addItemToCart, removeItemFromCart };
};
