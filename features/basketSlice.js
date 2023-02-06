import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  item: {},
  totalAmount: 0,
  totalQuantity: 0,
  changed: false,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          imgUrl: newItem.imgUrl,
          short_description: newItem.short_description,
        });
        state.totalAmount = state.totalAmount + newItem.price;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.totalAmount = state.totalAmount + newItem.price;
      }
    },
    removeFromBasket: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
        state.totalAmount = state.totalAmount - existingItem.price;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        state.totalAmount = state.totalAmount - existingItem.price;
      }
    },
    filterItems: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      state.item = item;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, filterItems } =
  basketSlice.actions;
// export const selectBasketItems = state => state.basket.items;
// export const totalAmountOfItems = state => state.basket.totalAmount;
// export const totalQuantityOfItems = state => state.basket.totalQuantity;
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter(item => item.id === id);

export default basketSlice.reducer;
