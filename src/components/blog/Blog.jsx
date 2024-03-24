import React from 'react'
import { PenTool, Video } from 'react-feather'
import "./blog.css";
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
    <div className='blog'>
      <img src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg" width="1100px" height="500px" style={{alignContent:"center", border:"5px solid black", padding: "15px"}} alt=""></img>
      <br></br>
            <span/>
            <p style={{fontSize:"18px"}}>Blog writing is a way of presenting your own thoughts and sharing your knowledge. Writing blogs not only helps you to teach others or help others to know many new things but also allows ou to increase your own knowledge <a style={{color:"white"}}href="https://www.infidigit.com/blog/what-is-a-blog/" className='button solid'><button>Read more...</button></a></p>
            <label for="blogwriting"></label>
            <h1 style={{textDecoration:"overline", fontFamily:"times-new-roman", marginTop:"20px",marginBottom:"5px"}}><PenTool/> Write Your Own Blog</h1>
      <textarea id="w3review" name="blogwriting" rows="4" cols="50" placeholder="What's in your mind today?"style={{borderRadius:"10px", padding:"10px"}}></textarea>
      <button type="submit" style={{marginLeft:"50%"}} onClick={publish}>Publish</button>
    </div>
  )
}

export default BlogPage
