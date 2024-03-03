import {configureStore, combineReducers} from "@reduxjs/toolkit";
//for localStorage
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//reducers
import shopReducer from "../reducers/shopReducer";
import shoppingCartReducer from "../reducers/shoppingCartReducer";

const rootReducer = combineReducers({
    shop: shopReducer,
    shoppingCart: shoppingCartReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['shop']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);
export default store;