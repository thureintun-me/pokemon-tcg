import { persistor, store } from "@/app/store";
import ApplicationNavigator from "@/navigation/ApplicationNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ApplicationNavigator />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
