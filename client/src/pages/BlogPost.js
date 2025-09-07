// BlogPost.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import "./../style.css"; // Ensure this path is correct

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Hosting a Successful Event",
    date: "August 25, 2025",
    author: "Eventra Team",
    image: "https://www.entrepreneurshipinabox.com/wp-content/uploads/10-Essential-Tips-for-Successful-Event-Planning.webp",
    fullContent: "Planning an event can be overwhelming, but with the right approach you can ensure success. Here are our top 10 tips to make your event unforgettable. (This is where the full, detailed content would go!)",
  },
  {
    id: 2,
    title: "Why Venue Selection is the Key to Your Event",
    date: "August 20, 2025",
    author: "Eventra Team",
    image: "https://d12m9erqbesehq.cloudfront.net/wp-content/uploads/sites/2/2024/01/05091011/Blog-Banner-Event-Venue-Checklist.jpg",
    fullContent: "The venue sets the tone for your event. Learn how to choose the perfect space that aligns with your vision and audience. (This is where the full, detailed content would go!)",
  },
  {
    id: 3,
    title: "The Future of Event Technology in 2025",
    date: "August 10, 2025",
    author: "Eventra Team",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Vm8LFjStxtClzKFwYfQ2wtR5Liz5jk_ZvQ&s",
    fullContent: "From AI-driven scheduling to immersive AR experiences, discover the cutting-edge event tech trends shaping 2025. (This is where the full, detailed content would go!)",
  },
];

function BlogPost() {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(postId));

  if (!post) {
    return <div className="blog-page">Post not found!</div>;
  }

  return (
    <div className="blog-page blog-detail">
      <Link to="/blog" className="back-link">← Back to all posts</Link>
      <img src={post.image} alt={post.title} className="detail-image" />
      <div className="detail-content">
        <h1>{post.title}</h1>
        <p className="detail-meta">By {post.author} | {post.date}</p>
        <p className="detail-text">{post.fullContent}</p>
      </div>
    </div>
  );
}

export default BlogPost;
