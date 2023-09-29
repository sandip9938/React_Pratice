import {createSlice} from '@reduxjs/toolkit'

const intialState= {
    status:false,
    userdata:false,
}
const authSlice = createSlice({
    name:"auth",
    intialState,
    reducers:{
        login:(state,action)=>{
            state.status=true
            state.userdata=action.payload.userdata
        },
        logout:(state)=>{
            state.status=false
            state.userdata=null
        }
    }
})
export const{login ,logout}=authSlice.actions;
export default authSlice.reducer