import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./components/Cards/sightsSlice";

export default configureStore({
  reducer: {
    mySlice: myReducer,
  },
});
