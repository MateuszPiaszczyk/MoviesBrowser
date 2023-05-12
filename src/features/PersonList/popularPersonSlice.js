import { createSlice } from "@reduxjs/toolkit";

const popularPersonSlice = createSlice({
  name: "popularPerson",
  initialState: {
    popularPersonList: null,
    status: null,
  },

  reducers: {
    fetchPopularPerson: () => ({
      status: "loading",
      popularPersonList: null,
    }),
    fetchPopularPersonSuccess: () => ({
      status: "success",
      popularPersonList,
    }),
    fetchPopularPersonError: () => ({
      status: "error",
      popularPersonList: null,
    }),
  },
});

export const {
  fetchPopularPerson,
  fetchPopularPersonSuccess,
  fetchPopularPersonError,
} = popularPersonSlice.actions;

export const selectStatePopularPerson = (state) => state.popularPerson;
export const selectPopularPersonStatus = (state) =>
  selectStatePopularPerson(state).status;
export const selectPopularPersonList = (state) =>
  selectStatePopularPerson(state).popularPersonList;

export default popularPersonSlice.reducer;
