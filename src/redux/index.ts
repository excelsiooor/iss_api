import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { issApi } from '../services/IssService';

const rootReducer = combineReducers({
  [issApi.reducerPath]: issApi.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware()
      .concat(issApi.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']