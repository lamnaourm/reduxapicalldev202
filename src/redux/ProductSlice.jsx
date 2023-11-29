import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const res = await axios.get('https://api.escuelajs.co/api/v1/products');
    return res.data
})


const ProductSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        loading: false,
        error:''
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) =>{
            state.loading = true
        })
        builder.addCase(getProducts.fulfilled, (state, action) =>{
            state.products = action.payload
            state.loading = false
        })
        builder.addCase(getProducts.rejected, (state, action) =>{
            state.error = action.payload
            state.loading = false
        })
    }

})

export const {} = ProductSlice.actions
export default ProductSlice.reducer
