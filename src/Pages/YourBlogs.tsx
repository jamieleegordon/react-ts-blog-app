import { Blog, Blogs } from '../Lists/BlogList';
import TreesImage from '../Assets/trees.jpg'
import { useNavigate } from 'react-router-dom'
import '../Styles/BlogPages.css'

const YourBlogs: React.FC = () => {

    const storedBlogs: Blog[] = JSON.parse(localStorage.getItem('blogs') || '[]');
    const allBlogs: Blog[] = storedBlogs.length > 0 ? storedBlogs : Blogs;

    const navigate = useNavigate();

    return (
        <div className="HomeContainer">
            <h1 className="HomeHeading-YourBlogs">Your Blogs</h1> 
            <div 
                className="BlogList-YourBlogs" 
            > 
                {allBlogs.map((blog, index) => (
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
        </div>
    )
}

export default YourBlogs