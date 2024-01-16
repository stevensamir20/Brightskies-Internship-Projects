import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, fetchTodos } from "../api/index";
import { TodoCard } from "./TodoCard";

export const TodoList = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const search = "";

  const {
    data: todos,
    isLoading,
    isFetching,
    isFetched,
  } = useQuery({
    queryKey: ["todos", { search }],
    queryFn: () => fetchTodos(search),
    staleTime: 2000,
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    mutationKey: ["addTodo"],
  });

  if (isLoading) {
    return <div>Loading Todos...</div>;
  }

  return (
    <div>
      <ul>
        <li>isFetching: {isFetching.toString()}</li>
        <li>isFetched: {isFetched.toString()}</li>
        <li>isLoading: {isLoading.toString()}</li>
      </ul>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add Todo"
        />
        <button
          onClick={async () => {
            try {
              await addTodoMutation({ title });
              setTitle("");
            } catch (e) {
              console.log(e);
            }
          }}
        >
          Add Todo
        </button>
      </div>
      {todos?.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
