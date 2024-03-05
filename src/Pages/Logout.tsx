import React from 'react';
import '../Styles/BlogPages.css';

const Logout: React.FC = () => {
    const handleLogout = () => {
        window.location.reload();
    };

    return (
        <div className="HomeContainer">
            <h1 className="HomeHeading-YourBlogs">
                Are you sure you want to logout?
            </h1> 
            
            <button onClick={handleLogout}>Yes</button>
            
        </div>
    );
}

export default Logout;
