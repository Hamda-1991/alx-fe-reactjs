import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Access the dynamic parameter (e.g., the blog post ID)

  return (
    <div>
      <h1>Blog Post {id}</h1>
      {/* Here you can fetch and display the blog post based on the id */}
    </div>
  );
};

export default BlogPost;
