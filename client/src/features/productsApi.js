import { createApi, fetchBaseQuery  } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi ({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseURL: "http://localhost:5173"}),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => "products",
    })
  })
})



export const { useGetAllProductsQuery } = productsApi