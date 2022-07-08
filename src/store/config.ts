import { combineReducers, configureStore} from "@reduxjs/toolkit";
import todoSlice from "./slices/TodoSlice";
import counterSlice from "./slices/counterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
    counter: counterSlice.reducer,
    todo: todoSlice.reducer,
})
const initialSate = {}
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
    devTools: process.env.NODE_ENV !== "production",
    preloadedState: initialSate,
    enhancers: (defaultEnhancers ) => [...defaultEnhancers]
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
