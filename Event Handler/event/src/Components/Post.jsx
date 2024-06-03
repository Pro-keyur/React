import React from 'react'

function Post({id,title,body}) {
  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",width:"800px",margin:"10px auto",backgroundColor:"teal"}}>
          <div key={id} style={{width:"800px"}}>
            <h1 style={{color:"white"}}>{title}</h1>
            <h3 style={{color:"white"}}>{body}</h3>
          </div>
        </div>
    </div>
  )
}

export default Post
