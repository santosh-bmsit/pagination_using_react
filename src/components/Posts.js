import React from 'react'

function Posts({posts,loading}) {
if(loading){
    return <h1>loading...</h1>
}
    return (
      <ul className="list-group ">
{
    posts.map(post=>(
        <li key={post.id} className="list-group-item">{post.title}</li>
    ))
}
      </ul>
    )
}

export default Posts
