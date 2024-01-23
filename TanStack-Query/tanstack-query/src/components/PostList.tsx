import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addPost, fetchPosts } from "../api/index";

export const PostList = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");

  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
    staleTime: Infinity,
  });

  const { mutateAsync: addPostMutation } = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({predicate: (query) => query.queryKey[0] === 'posts' });
    },
    // onSuccess: () =>
    //   Promise.all([
    //     queryClient.invalidateQueries({ queryKey: ["posts"] }),
    //     queryClient.invalidateQueries({ queryKey: ["todos"] }),
    //   ]),
    mutationKey: ["addPost"],
  });

  if (isLoading) {
    return <div>Loading Posts...</div>;
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add Post"
        />
        <button
          onClick={async () => {
            try {
              await addPostMutation({ title });
              setTitle("");
            } catch (e) {
              console.log(e);
            }
          }}
        >
          Add Post
        </button>
      </div>
      {posts?.map((post) => (
        <li key={post.id}> {post.title} </li>
      ))}
    </div>
  );
};
