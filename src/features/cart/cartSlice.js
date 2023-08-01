import { createSlice } from '@reduxjs/toolkit';
import { getCartItemsFromLocalStorage } from '../../utils/localStorage';

const initialState = {
	cartItems: getCartItemsFromLocalStorage() || [],
	totalAmount: 0,
	totalPrice: 0,
	shippingFee: 1999,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		buyNow: (state, { payload: { amount, product } }) => {
			return { ...initialState, cartItems: [{ amount, product }] };
		},
		addToCart: (state, { payload: { amount, product } }) => {
			const tempCartItem = state.cartItems.find(
				(item) => item.product.product_id === product.product_id
			);
			if (tempCartItem) {
				const newCartItems = state.cartItems.map((item) => {
					if (item.product.product_id === product.product_id) {
						let newAmount = item.amount + amount;
						if (newAmount > item.product.stock) {
							newAmount = item.product.stock;
						}
						return { ...item, amount: newAmount };
					}
					return item;
				});
				return { ...state, cartItems: newCartItems };
			} else {
				const newCartItem = { amount, product };
				return { ...state, cartItems: [...state.cartItems, newCartItem] };
			}
		},
		removeFromCart: (state, { payload: id }) => {
			const newCartItems = state.cartItems.filter((cartItem) => {
				return cartItem.product.product_id !== id;
			});
			state.cartItems = newCartItems;
		},
		clearCart: () => {
			return { ...initialState };
		},
		increaseItemAmount: (state, { payload: id }) => {},
		decreaseItemAmount: (state, { payload: id }) => {},
		calculateTotals: (state) => {
			const { totalAmount, totalPrice } = state.cartItems.reduce(
				(totals, { amount, product: { price } }) => {
					totals.totalAmount += amount;
					totals.totalPrice += amount * price;
					return totals;
				},
				{
					totalAmount: 0,
					totalPrice: 0,
				}
			);
			return { ...state, totalAmount, totalPrice };
		},
	},
});

export default cartSlice.reducer;

export const {
	buyNow,
	addToCart,
	removeFromCart,
	clearCart,
	increaseItemAmount,
	decreaseItemAmount,
	calculateTotals,
} = cartSlice.actions;
