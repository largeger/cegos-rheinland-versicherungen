import {useEffect, useState} from "react";
import axios from "axios";


interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function GetJsonPlaceholder() {
    const [data, setData] = useState<Post[]>([])

    async function fetchData() {
        try {
            const response = await axios.get<Post[]>("http://localhost:3001/books");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <h2>API Data from JSONPlaceholder (Posts)</h2>
            <ul>
                {
                    data.map(post => (<li key={post.id}>{post.title}</li>))
                }
            </ul>
        </div>
    );
}

export default GetJsonPlaceholder;
