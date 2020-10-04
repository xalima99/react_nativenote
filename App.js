import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import AppNavigator from "./src/Navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
