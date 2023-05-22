import { createSlice } from "@reduxjs/toolkit";

const ToggleSlice = createSlice({
    name:"toggle",
    initialState :{isOpen : true},
    reducers:{
        changeOnCLick : (state)=>{
            state.isOpen = !state.isOpen
            console.log("changed to " + state.isOpen)
        }
    }
})

export const {changeOnCLick} = ToggleSlice.actions
export default ToggleSlice.reducer