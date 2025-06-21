import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Converter from "./components/Converter";

const App = () => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <section className="h-screen bg-gradient-to-b from-blue-900 to-blue-200 flex justify-center items-center p-4">
        <Converter />
      </section>
    </QueryClientProvider>
  );
};

export default App;
