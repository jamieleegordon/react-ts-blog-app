import React from 'react';
import { Blog, Blogs } from '../Lists/BlogList';
import TreesImage from '../Assets/trees.jpg'
import '../Styles/ViewBlog.css';
import { useParams } from 'react-router-dom';

const ViewYourBlog: React.FC = () => {

    const { id } = useParams<{ id?: string }>();
    const blogId: number = parseInt(id || ""); 

    const blog: Blog | undefined = Blogs[blogId];

  return (
    <div className="HomeContainer">
      <h1 className="HomeHeading-YourBlogs">{blog.title}</h1>
      
      <h2>Written by: {blog.author}</h2>

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

export default ViewYourBlog;
