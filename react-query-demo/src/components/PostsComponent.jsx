import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["posts"], // Unique key for the query
    queryFn: fetchPosts,
    cacheTime: 5 * 60 * 1000, // Cache data for 5 minutes
    staleTime: 30 * 1000, // Data stays fresh for 30 seconds
    refetchOnWindowFocus: true, // Refetch when window is focused
    keepPreviousData: true, // Keep old data while fetching new
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
