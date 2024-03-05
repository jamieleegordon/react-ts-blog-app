import React from 'react';
import { Blog, Blogs, RecommendedBlogs, TrendingBlogs, DiscoverBlogs, SavedBlogs } from '../Lists/BlogList';
import TreesImage from '../Assets/trees.jpg'
import '../Styles/Home.css'; 
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {

    const storedBlogs: Blog[] = JSON.parse(localStorage.getItem('blogs') || '[]');
    const allBlogs: Blog[] = storedBlogs.length > 0 ? storedBlogs : Blogs;

    const navigate = useNavigate();

    return (
        <div className="HomeContainer"> 

            <div className="HeadingContainer">
                <h1 className="HomeHeading">Your Blogs</h1>
                <button 
                    className = 'seeAll-button'
                    onClick={() => navigate(`/yourBlogs`)}
                >
                    See All
                </button>
            </div>
            <div className="BlogList"> 
                {allBlogs.slice(0, 10).map((blog, index) => (
                    <div 
                        className="Blog-Card" 
                        key={index}
                        onClick={() => navigate(`/viewYourBlog/${index}`)}
                    >
                        <h1>{blog.title}</h1>
                        {blog.image && blog.image.startsWith("blob:") ? (
                            <img src={blog.image} alt="Blog" />
                        ) : (
                            <img src={TreesImage} alt="Default Blog" />
                        )}    
                        <h2>Written by {blog.author}</h2>
                        <h2>{blog.date}</h2>
                    </div>
                ))}
            </div>

            <div className="HeadingContainer">
                <h1 className="HomeHeading">Recommended</h1>
                <button 
                    className = 'seeAll-button'
                    onClick={() => navigate(`/recommended`)}
                >
                    See All
                </button>
            </div> 
            <div className="BlogList"> 
                {RecommendedBlogs.slice(0, 10).map((blog, index) => (
                    <div 
                        className="Blog-Card" 
                        key={index}
                        onClick={() => navigate(`/viewRecommended/${index}`)}
                    >
                        <h1>{blog.title}</h1>
                        {blog.image && blog.image.startsWith("blob:") ? (
                            <img src={blog.image} alt="Blog" />
                        ) : (
                            <img src={TreesImage} alt="Default Blog" />
                        )}    
                        <h2>Written by {blog.author}</h2>
                        <h2>{blog.date}</h2>                       
                    </div>
                ))}
            </div>

            <div className="HeadingContainer">
                <h1 className="HomeHeading">Trending</h1>
                <button 
                    className = 'seeAll-button'
                    onClick={() => navigate(`/trending`)}
                >
                    See All
                </button>
            </div>
            <div className="BlogList"> 
                {TrendingBlogs.slice(0, 10).map((blog, index) => (
                    <div 
                        className="Blog-Card" 
                        key={index}
                        onClick={() => navigate(`/viewTrending/${index}`)}
                    >
                        <h1>{blog.title}</h1>
                        {blog.image && blog.image.startsWith("blob:") ? (
                            <img src={blog.image} alt="Blog" />
                        ) : (
                            <img src={TreesImage} alt="Default Blog" />
                        )}    
                        <h2>Written by {blog.author}</h2>
                        <h2>{blog.date}</h2>                        
                    </div>
                ))}
            </div>

            <div className="HeadingContainer">
                <h1 className="HomeHeading">Discover</h1>
                <button 
                    className = 'seeAll-button'
                    onClick={() => navigate(`/discover`)}
                >
                    See All
                </button>
            </div>
            <div className="BlogList"> 
                {DiscoverBlogs.slice(0, 10).map((blog, index) => (
                    <div 
                        className="Blog-Card" 
                        key={index}
                        onClick={() => navigate(`/viewDiscover/${index}`)}
                    >
                        <h1>{blog.title}</h1>
                        {blog.image && blog.image.startsWith("blob:") ? (
                            <img src={blog.image} alt="Blog" />
                        ) : (
                            <img src={TreesImage} alt="Default Blog" />
                        )}    
                        <h2>Written by {blog.author}</h2>
                        <h2>{blog.date}</h2>                       
                    </div>
                ))}
            </div>

            <div className="HeadingContainer">
                <h1 className="HomeHeading">Saved</h1>
                <button 
                    className = 'seeAll-button'
                    onClick={() => navigate(`/saved`)}
                >
                    See All
                </button>
            </div>
            <div className="BlogList"> 
                {SavedBlogs.slice(0, 10).map((blog, index) => (
                    <div 
                        className="Blog-Card" 
                        key={index}
                        onClick={() => navigate(`/viewSaved/${index}`)}
                    >
                        <h1>{blog.title}</h1>
                        {blog.image && blog.image.startsWith("blob:") ? (
                            <img src={blog.image} alt="Blog" />
                        ) : (
                            <img src={TreesImage} alt="Default Blog" />
                        )}    
                        <h2>Written by {blog.author}</h2>
                        <h2>{blog.date}</h2>                       
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Home;
