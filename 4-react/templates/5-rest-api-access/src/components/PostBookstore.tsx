import {type ChangeEvent, useState} from "react";
import axios from "axios";

function PostBookstore(props) {

    const [postData, setPostData] = useState({
        title: '',
        author: ''
    });

    function handleInputChange(event : ChangeEvent<HTMLInputElement>)  {
        const {name, value} = event.target;
        setPostData({...postData, [name]: value});  // spread operator um das postdata-objekt mit einem neuen key-value Paar zu ergänzen / zu überschreiben
    }

    async function handleSubmit(event : SubmitEvent) {
        event.preventDefault()
        const response = await axios.post("http://localhost:3001/books", postData)
        props.setData(response.data);
    }

    return (
        <div>
            <h2>Create a new Post</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor={"title"}>Title</label>
                <input
                    onChange={handleInputChange}
                    type="text"
                    name="title"
                    placeholder="Title of the Post"
                    id="title"
                    value={postData.title}
                />
                <label htmlFor={"author"}>Author</label>
                <input
                    onChange={handleInputChange}
                    type="text"
                    name="author"
                    placeholder="Author of the book"
                    id="author"
                    value={postData.author}
                />
                <button type='submit'>Submit</button>
            </form>

        </div>
    );
}

export default PostBookstore;
