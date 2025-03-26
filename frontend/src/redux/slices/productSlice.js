import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// async thunk to fetch products by collection and optional filters
export const fetchProductsByFilters = createAsyncThunk(
  "products/fetchProductsByFilters",
  async ({
    collection,
    size,
    color,
    gender,
    minprice,
    maxprice,
    sortBy,
    search,
    category,
    brand,
    limit,
    material,
  }) => {
    const query = new URLSearchParams();
    if (collection) query.append("collection", collection);
    if (size) query.append("size", size);
    if (color) query.append("color", color);
    if (gender) query.append("gender", gender);
    if (minprice) query.append("minprice", minprice);
    if (maxprice) query.append("maxprice", maxprice);
    if (sortBy) query.append("sortBy", sortBy);
    if (search) query.append("search", search);
    if (category) query.append("category", category);
    if (brand) query.append("brand", brand);
    if (limit) query.append("limit", limit);
    if (material) query.append("material", material);

    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/products?${query.toString()}`
    );
    return response.data;
  }
);

// async thunk to fetch product by ID
export const fetchProductDetails = createAsyncThunk(
   "products/fetchProductDetails",async(id)=>{
    const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`);
    return response.data;
   }
)

// Async thunk to fetch similar products

export const updateProduct = createAsyncThunk(
    "products/updateProduct",async(id)=>{
     const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`);
     return response.data;
    }
 )