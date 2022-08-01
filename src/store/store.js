import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import porductReducer from './productSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: porductReducer
        //her we can add multiple reducers
    }
});


export default store;

//then finally we export store for inject in our component by Provicer which we get from react-redux


//then we are import cartReducer and registring in reducers