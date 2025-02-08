import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";
import {persistor, store} from "./Store/store.tsx";
import {PersistGate} from "redux-persist/integration/react";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
      <Provider store={store}>
           <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
                <App />
           </PersistGate>
      </Provider>
      </QueryClientProvider>
  </StrictMode>,
)
