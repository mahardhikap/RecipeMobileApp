import { createStore, applyMiddleware } from "redux"; // Update import
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"; // Update import

import reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const logger = createLogger({});

const configureStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(logger, thunk));
  const persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};

export default configureStore;