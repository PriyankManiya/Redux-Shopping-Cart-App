import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    showCart : false
  },
  reducers: {
    addTocart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;

      state.totalPrice = state.totalPrice += newItem.price;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice += newItem.price;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload.id;

      const existingList = state.items;

      existingList.forEach((item, index) => {
        if (item.id === id) {
          if (parseInt(item.quantity) === 1) {
            console.log("INDEX :" + index);
            console.log("BEFORE :" + existingList);

            existingList.splice(index, 1);
            state.totalQuantity--;
            state.totalPrice -= item.price;

            console.log("AFTER" + existingList);
          } else {
            state.totalQuantity--;
            state.totalPrice -= item.price;
            item.quantity--;
            item.totalPrice = item.totalPrice -= item.price;
          }
        }
      });
      state.items = existingList;
    },
    toggleCart : (state) => { 
        state.showCart = !state.showCart;
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
