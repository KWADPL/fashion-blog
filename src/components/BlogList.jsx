import React from "react";
import BlogPost from "./BlogPost";
import "../styles/BlogList.css";

function BlogList() {
  const posts = [
    {
      id: 1,
      title: "Latest Fashion Trends in 2024",
      date: "August 30, 2024",
      content: "Discover latest fasion trends in 2024...",
    },
    {
        id: 2,
        title: "How to Style Your Summer Outfits",
        date: "July 15, 2024",
        content: "Learn how to style your outfits for the summer...",
      },
    {
      id: 3,
      title: "Starting new School year 2024/2025",
      date: "1 September, 2024",
      content: "Finish the summer and start school with cool outfits...",
    },
    {
      id: 4,
      title: "Office look",
      date: "July 15, 2024",
      content: "End of your vacation, come back to work looking stylish...",
    },
    {
        id: 5,
        title: "Look for discounts",
        date: "September 2, 2024",
        content: "Look for new discounts in your local shop! Even -80% sale for EVERYTHING...",
      },
      {
        id: 6,
        title: "Lorem lipsum",
        date: "July 15, 2024",
        content: "Lorem lipsum...",
      }
  ];

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          title={post.title}
          date={post.date}
          content={post.content}
        />
      ))}
    </div>
  );
}

export default BlogList;
