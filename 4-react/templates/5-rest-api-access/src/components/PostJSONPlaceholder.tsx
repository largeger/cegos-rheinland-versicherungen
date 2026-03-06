import {type FormEvent, useState} from "react";
import axios from "axios";

function PostJsonPlaceholder() {
    const dummyobject =  {
        "title": "Bavarian Lorem Ipsum",
        "body": "Drottl, Saubreiß, Badhur, Mistviach, Hausdracha, Großkopfada, Bazi, Schundnickl, Besnbinda, Schbringgingal, Zwedschgarl, Schuibuamtratza, elendiger, varreckter Hund, junga Duttara, misdiga Lausbua, Schdehlratz, Lausbua, Grawurgl, Fünferl, Klugscheissa, Hanswurst, Schoaßwiesn, Schlawina, Gmoadepp, Dipfalscheißa, Hopfastanga, Wuidsau, Gscheidhaferl, Freindal, Aushuifsbaya, Fechtbruada, schiache Goaß, Betonschedl, Freibialädschn, Presssack, Schrazn, Schdinkadores, Fechtbruada, Oasch"
    }
    const [responseData, setResponseData] = useState(dummyobject);
    const [postData, setPostData] = useState(dummyobject);

    function handleInputChange(event) {
        const {name, value} = event.target;
        setPostData({...postData, [name]: value});  // spread operator um das postdata-objekt mit einem neuen key-value Paar zu ergänzen / zu überschreiben
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", postData)
        setResponseData(response.data);
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
                <label htmlFor={"body"}>Body</label>
                <input
                    onChange={handleInputChange}
                    type="text"
                    name="body"
                    placeholder="Contents of Post"
                    id="body"
                    value={postData.body}
                />
                <button type='submit'>Submit</button>
            </form>

            <h2>Response Data:</h2>
            <h4>{responseData.title}</h4>
            <p>{responseData.body}</p>
            <h2>Post Data:</h2>
            <p>{postData.title}</p>
            <p>{postData.body}</p>
        </div>
    );
}

export default PostJsonPlaceholder;
