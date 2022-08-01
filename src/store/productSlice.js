const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: 'error',
    LOADING: 'loading',
})


const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        // setProducts(state, action) {

        //     //Do not do this never
        //     // const res = await fetch('https://fakestoreapi.com/products')
        //     state.data = action.payload
        // },
        // setStatus(state, action) {
        //     state.status = action.payload
        // }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUSES.IDLE
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR
            })
    }
})

export const { setProducts, setStatus } = productSlice.actions;   //by this we are gating those actions and exporting 
export default productSlice.reducer;       //and exporting reducers for registring in store


//Thunks  => Thunks is a normal function
//in thunk function we are returning new functions

//second way of doing thunk
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    return data
})




//first way of doing thunk
// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch('https://fakestoreapi.com/products')

//             const data = await res.json();
//             console.log('res', data);
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));

//         } catch (error) {
//             console.log(error);
//             dispatch(setStatus(STATUSES.ERROR));

//         }
//     }
// }









//===========>notes
//reducers is one type of function by this function we can mutate our data and this reducers are pure function asi function jiskar koi side efficet nahi hota he 
//reducers is for changing state 
//using slice we can dirictly changing our state
//createSlice automaticly create action and reducers



//steps

//frist create slice for our data
//then initial state assign 
//and create reducers for our functions for changing our state
