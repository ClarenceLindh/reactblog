import useFetch from '../useFetch';
import Bloglist from './Bloglist';

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isLoading && <div>Loading...</div> }
            { blogs && <Bloglist blogs = { blogs }/>}
        </div>
    );
}
 
export default Home;