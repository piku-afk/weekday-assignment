import { useDispatch, useSelector } from "react-redux";

import type { store } from "../store";

type StoreState = ReturnType<typeof store.getState>;
type StoreDispatch = typeof store.dispatch;

// use these type-safe hooks instead of `useSelector` and `useDispatch` hooks from redux
// these hooks infer types from store state and dispatch function
export const useStoreSelector = useSelector.withTypes<StoreState>();
export const useStoreDispatch = useDispatch.withTypes<StoreDispatch>();
