import { Blog, SavedBlogs } from '../Lists/BlogList';
import TreesImage from '../Assets/trees.jpg'
import '../Styles/BlogPages.css'
import { useNavigate } from 'react-router-dom';

const Trending: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="HomeContainer">
            <h1 className="HomeHeading-YourBlogs">Saved</h1> 
            <div 
                className="BlogList-YourBlogs" 
            > 
                {SavedBlogs.map((blog, index) => (
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
    )
}

export default Trending