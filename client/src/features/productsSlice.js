import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Video 7 from this series  https://www.youtube.com/watch?v=0T7P6Mb2XNE&list=PL63c_Ws9ecIRnNHCSqmIzfsMAYZrN71L6&index=9
const initialState = {
  items: [],
  status: null,
  error: null
};


export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    // try {

      const response = await axios.get("http://localhost:5173/shop")
      return response?.data;
    // } catch (err) {
      // return rejectWithValue("An error occured: Features > ProductsSlice.js");
  }
);


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
      state.error = action.payload;
    }
  }
})

export default productsSlice.reducer;