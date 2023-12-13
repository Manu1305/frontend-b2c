import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE={
    useData:{},
}


const userSlice=createSlice({
    name:'user',
    initialState:INITIAL_STATE,
    reducers:{
        setUserinfo:(state,action)=>{
            state.useData=action.payload;   
        }
    }
})

export default userSlice.reducer;