import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Blog } from '../Lists/BlogList';
import BlogList from '../Lists/BlogList'
import { MdUpload } from "react-icons/md";
import '../Styles/NewBlog.css'
import { error } from 'console';

interface FormErrors {
    author?: string
}

const NewBlog: React.FC = () => {

    const [author, setAuthor] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [content, setContent] = useState<string>("")
    const [date, setDate] = useState<string>("")

    const [file, setFile] = useState<File | null>(null)
    const [image, setImage] = useState<string | undefined>("")

    const [errors, setErrors] = useState<FormErrors>({});

    useEffect(() => {
        const textarea = document.getElementById('content') as HTMLTextAreaElement;
        textarea.style.height = 'auto'; // Reset height
        textarea.style.height = textarea.scrollHeight + 'px'; // Set height to scrollHeight
    }, [content]);

    useEffect(() => {
        newDate();
    }, [date]);

    const newDate = (): void => {
        const currentDate: Date = new Date();
        setDate(currentDate.toDateString());
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let valid: boolean = true;
        const newErrors: FormErrors = {};
        
        if (!author.trim()) {
            newErrors.author = "Author Name is required";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
   } 

   const saveBlogsToLocalStorage = (blogs: Blog[]) => {
        localStorage.setItem('blogs', JSON.stringify(blogs));
    }

    const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement & {
            files: FileList;
        };

        if (target.files && target.files.length > 0) {
            const selectedFile = target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                const dataUrl = reader.result as string; // Convert the result to a string
                setFile(selectedFile); // Store the uploaded file in state
                // setImage(dataUrl)
                const imageUrl = URL.createObjectURL(selectedFile);
                setImage(imageUrl); // Set the image state as the URL
                // console.log('dataUrl:', dataUrl);
            };

            reader.readAsDataURL(selectedFile); // Read the contents of the selected file
        }
    };


  return (
    <div className='NewBlog'>
        <h1>New Blog</h1>
        <form onSubmit={handleSubmit}>

            <label>Author Name:
                <input 
                    required
                    type="text" 
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                />
                {errors.author && <span>{errors.author}</span>}
            </label>

            <label>Blog Title:
                <input 
                    required
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>

            <label>Upload Image</label>

            <label className="custom-file-upload">
                <input
                    className='choose-file'
                    type="file"
                    name="image"
                    onChange={imageHandler}
                />
                <MdUpload  className="upload-icon" />
            </label>
            
            <textarea
                required
                id="content"
                onChange={handleChange}
                placeholder="Enter your blog content here..."
            ></textarea>
            
            <Link to="/react-ts-blog-app">
                <button 
                    type="submit"
                    onClick={() => {
                        const newBlog: Blog = {author, title, image, content, date}
                        BlogList.unshift(newBlog)
                        saveBlogsToLocalStorage(BlogList);
                    }}
                >
                    Post</button>
            </Link>
        </form>
    </div>
  )
}

export default NewBlog

