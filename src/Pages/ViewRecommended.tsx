import React from 'react';
import { Blog, RecommendedBlogs, SavedBlogs } from '../Lists/BlogList';
import TreesImage from '../Assets/trees.jpg'
import '../Styles/ViewBlog.css';
import { useParams } from 'react-router-dom';
import { FaBookmark } from "react-icons/fa6";

const ViewRecomended: React.FC = () => {

    const { id } = useParams<{ id?: string }>();
    const blogId: number = parseInt(id || ""); 

    const blog: Blog | undefined = RecommendedBlogs[blogId];

    const handleSave = () => {
      SavedBlogs.unshift(blog)
    }

  return (
    <div className="HomeContainer">
      <h1 className="HomeHeading-YourBlogs">{blog.title}</h1>
      
      <h2>Written by: {blog.author}</h2>

      <FaBookmark
        className='bookmark-unclicked'
        onClick={handleSave}
      >
        Save
      </FaBookmark>

      <div className='containerImg'>
        {blog.image && blog.image.startsWith("blob:") ? (
            <img src={blog.image} alt="Blog" />
        ) : (
            <img src={TreesImage} alt="Default Blog" />
        )}
      </div>

      <p>{blog.content}</p>
      
    </div>
  );
};

export default ViewRecomended;

// make seperate viewBlog for each list beacause need to read index 