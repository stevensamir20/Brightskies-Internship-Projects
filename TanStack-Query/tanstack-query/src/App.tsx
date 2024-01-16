import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TodoList } from "./components/TodoList";
import { PostList } from "./components/PostList";
import { QueryState } from "./components/QueryState";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryState />
      <hr />
      <TodoList />
      <PostList />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
