import { Link } from "react-router-dom";

const Bloglist = ({blogs}) => {


    return (
        <div className="blog-list">
            <div className="home">
                <h2>All blogs</h2>
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}> 
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bloglist;