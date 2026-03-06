import './App.css'
import GetJSONPlaceholder from "./components/GetJSONPlaceholder.tsx";
import PostJSONPlaceholder from "./components/PostJSONPlaceholder.tsx";
import GetBookstore from "./components/GetBookstore.tsx";
import PostBookstore from "./components/PostBookstore.tsx";
import {useState} from "react";

function App() {
    const [responseData, setResponseData] = useState({});

  return (
    <>
        <PostJSONPlaceholder></PostJSONPlaceholder>
        <hr/>
        <GetJSONPlaceholder></GetJSONPlaceholder>
        <hr/>
        <PostBookstore setData={setResponseData}></PostBookstore>
        <GetBookstore data={responseData}></GetBookstore>
    </>
  )
}

export default App
