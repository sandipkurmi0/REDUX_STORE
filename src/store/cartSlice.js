const { createSlice } = require('@reduxjs/toolkit');




const cartSlice = createSlice({
    name: 'cart', //give name
    initialState: [], //pass initialState
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    }
})

export const { add, remove } = cartSlice.actions;   //by this we are gating those actions and exporting 
export default cartSlice.reducer;       //and exporting reducers for registring in store











//===========>notes
//reducers is one type of function by this function we can mutate our data and this reducers are pure function asi function jiskar koi side efficet nahi hota he 
//reducers is for changing state 
//using slice we can dirictly changing our state
//createSlice automaticly create action and reducers



//steps

//frist create slice for our data
//then initial state assign 
//and create reducers for our functions for changing our state
