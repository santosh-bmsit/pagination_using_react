import React,{useState,useEffect} from "react"
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination"
function App() {
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postPerPage]=useState(10);

  useEffect(()=>{
  
    const fetchpost=async()=>{
      setLoading(true);
      const res= await axios.get("https://jsonplaceholder.typicode.com/posts");
setPosts(res.data);
setLoading(false);
    };
    fetchpost();
  },[])

  console.log(posts);

  //getting post
  const indexOflastpost=currentPage*postPerPage;
  const indexOffirsttpost=indexOflastpost-postPerPage;
  const currentPosts=posts.slice(indexOffirsttpost,indexOflastpost);

  //change page
  const paginate=(pageNumber)=>{
    setCurrentPage(pageNumber);
    console.log(pageNumber);
  } 
 
  return (

    <div className="container mt-3">
      <h1 className="text-primary mb-13">Posts</h1>
   <Posts posts={currentPosts} loading={loading} />
<Pagination 
postPerPage={postPerPage}
  totalposts={posts.length} 
  paginate={paginate}/>
    </div>
  );
}

export default App;
