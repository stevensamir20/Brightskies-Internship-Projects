import { Todo } from "../types/Todo";
import { Post } from "../types/Post";

const todos = [
  {
    id: 1,
    title: "Todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    completed: false,
  },
  {
    id: 3,
    title: "Todo 3",
    completed: false,
  },
  {
    id: 4,
    title: "Todo 4",
    completed: false,
  }
];

const posts = [
  {
    id: 1,
    title: "Post 1",
  },
  {
    id: 2,
    title: "Post 2",
  },
  {
    id: 3,
    title: "Post 3",
  },
];

export const fetchTodos = async (query = ""): Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("fetched todos");

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );

  return [...filteredTodos];
};


export const addTodo = async (todo: Pick<Todo, "title">): Promise<Todo> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  const newTodo = {
    id: todos.length + 1,
    title: todo.title,
    completed: false,
  };

  todos.push(newTodo);

  return newTodo;
};

export const fetchPosts = async (): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("fetched posts");
  return posts;
};

export const addPost = async (post: Pick<Post, "title">): Promise<Post> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newPost = {
    id: todos.length + 1,
    title: post.title,
  };

  posts.push(newPost);

  return newPost;
};