import { QueryClient, QueryClientProvider } from "react-query";
import "./App.scss";
import Router from "./Router";
import { Toaster } from "react-hot-toast";
import { FilterProvider } from "./utils/filter";
import { CartProvider } from "./utils/Cart";

function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
            fontSize: "15px",
          },
        }}
      />
      <QueryClientProvider client={queryClient}>
        <FilterProvider>
          <CartProvider>
            <Router />
          </CartProvider>
        </FilterProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
