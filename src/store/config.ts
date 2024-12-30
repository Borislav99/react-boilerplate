import {combineReducers, configureStore, createListenerMiddleware, type TypedStartListening} from '@reduxjs/toolkit';
import env from '@config/env';
import exampleReducer from '@features/example/exampleSlice';

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof storeSetup>;
type AppDispatch = typeof store.dispatch;

const rootReducer = combineReducers({
  example: exampleReducer,
});

const listenerMiddleware = createListenerMiddleware();
const startAppListening = listenerMiddleware.startListening as TypedStartListening<RootState, AppDispatch>;

const storeSetup = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: true,
      }).prepend(listenerMiddleware.middleware),
    devTools: !env.isProduction,
  });

const store = storeSetup();

export {storeSetup, startAppListening, listenerMiddleware, store};
export type {RootState, AppStore, AppDispatch};
