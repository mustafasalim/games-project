import {createSlice} from "@reduxjs/toolkit"



const initialState = {

    searchTerm: '',
}


const itemsSlice= createSlice({

    name :"items",
    initialState,
   reducers : {

    setSearchTerm: (state, action) => {
        state.searchTerm = action.payload;
      },
   }

    
})

export const { setSearchTerm } = itemsSlice.actions;
export default itemsSlice.reducer;