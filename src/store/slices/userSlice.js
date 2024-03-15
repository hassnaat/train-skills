import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("user");
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
};

const initialState = loadFromLocalStorage() || {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAddUser: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },

    setRemoveUser: (state) => {
      return null;
    },
  },
});

export const { setAddUser, setRemoveUser } = userSlice.actions;

export default userSlice.reducer;
