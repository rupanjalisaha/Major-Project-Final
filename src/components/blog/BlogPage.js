import React from 'react'
import { PenTool, Video } from 'react-feather'
function BlogPage() {
  const publish = ()=>{
    if(document.getElementById("w3review").value===""){
      alert("Nothing to publish. Please write your content to publish.");
    }else if (document.getElementById("w3review").value !==""){
    alert("Post published");
    document.getElementById("w3review").value ="";
    }
  }
  
  return (
    <div>
      <img src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg" width="1100px" height="500px" style={{alignContent:"center"}} alt=""></img>
            <h1 style={{textDecoration:"overline"}}>Write Your Own Blog</h1>
            <span/>
            <p style={{color:"white", fontSize:"18px"}}>Blog writing is a way of presenting your own thoughts and sharing your knowledge. Writing blogs not only helps you to teach others or help others to know many new things but also allows ou to increase your own knowledge <a style={{color:"white"}}href="https://www.infidigit.com/blog/what-is-a-blog/">Read more...</a></p>
            <label for="blogwriting"></label><PenTool></PenTool>
<textarea id="w3review" name="blogwriting" rows="4" cols="50" placeholder="What's in your mind today?"style={{borderRadius:"10px"}}></textarea>
<button type="submit" style={{alignContent:"center"}} onClick={publish}>Publish</button>
    </div>
  )
}

export default BlogPage
