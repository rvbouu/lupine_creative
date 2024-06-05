import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  items: [],
  status: null
};


export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get("http://localhost:3000/products")
    return response?.data
  }
)


// logic on retaining Users and Actions
const productsSlice = createSlice({
  name: "products",
  initialState, 
  reducers: {},
  // used to have actions that are already defined
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      // This ACTS like it mutates the state using redux toolkit 
      state.status = "pending"
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success"
      state.items = action.payload
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "pending"
    }
  }
})

export default productsSlice.reducer