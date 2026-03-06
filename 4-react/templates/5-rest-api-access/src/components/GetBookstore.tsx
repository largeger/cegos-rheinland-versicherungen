import {useEffect, useState} from "react";
import axios from "axios";


interface Book {
    id: number;
    author: string;
    title: string;
    description: string;
}

function GetBookstore(props) {
    const [data, setData] = useState<Book[]>([])

    async function fetchData() {
        try {
            const response = await axios.get<Book[]>("http://localhost:3001/books");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [props.data])

    return (
        <div>
            <h2>API Data from localhost Bookstore</h2>
            <ul>
                {
                    data.map(book => (<li key={book.id}>{book.title}</li>))
                }
            </ul>
        </div>
    );
}

export default GetBookstore;
