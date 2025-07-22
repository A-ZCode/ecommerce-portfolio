import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], //Array to hold cart items
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    //Add products to cart
    addItem: (state, action) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );
      existingItem 
        ? existingItem.quantity++ 
        : state.items.push({ ...action.payload, quantity: 1 });
    },
    //Decrease quantity
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    
    updateQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) item.quantity = action.payload.quantity;
    },
    //Clear all items from the cart
    clearCart: (state) => {
      state.items = [];
    }
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;