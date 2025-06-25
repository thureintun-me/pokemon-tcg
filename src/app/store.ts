import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
import themeReducer from "@/features/theme/themeSlice";
import favouritePokemonReducer from "@/features/favourite-pokemon/favouritePokemonSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const rootReducer = combineReducers({
  auth: persistReducer(
    {
      key: "auth",
      storage: AsyncStorage,
      whitelist: ["user"], // only persist `user`
    },
    authReducer,
  ),
  theme: persistReducer(
    {
      key: "theme",
      storage: AsyncStorage,
      whitelist: ["theme"], // only persist `user`
    },
    themeReducer,
  ),
  favouritesPokemon: persistReducer(
    {
      key: "favouritesPokemon",
      storage: AsyncStorage,
      whitelist: ["favourites"], // only persist `user`
    },
    favouritePokemonReducer,
  ),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
