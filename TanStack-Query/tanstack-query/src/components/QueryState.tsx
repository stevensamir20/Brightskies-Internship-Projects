import { useMutationState } from "@tanstack/react-query";

interface TodoTitle {
  title: string;
}

export const QueryState = () => {
  const postState = useMutationState<string>({
    filters: { mutationKey: ["addPost"], status: "pending" },
    select: (mutation) => mutation.state.status as string,
  });

  const todoTitle = useMutationState<TodoTitle>({
    filters: { mutationKey: ["addTodo"], status: "pending" },
    select: (mutation) => mutation.state.variables as TodoTitle,
  });

  return (
    <div>
      Post State: {postState}
      <br />
      Todo Title: {todoTitle[0]?.title}
    </div>
  );
};
