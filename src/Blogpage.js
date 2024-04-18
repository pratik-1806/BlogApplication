import { useState, useEffect } from "react"
import styles from "./Blogpage.module.css"

export default function Blog() {
  const[formData, setFormData]= useState({title:"",content:""});
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const [Blogs, setBlogs]= useState([]);

  function handleSubmit(e) {
    setBlogs([{title:formData.title, content:formData.content},...Blogs]);
    setFormData({title:"",content:""});
    
    console.log(Blogs)
    e.preventDefault();
  }

  function  removeBlog(i){
    setBlogs(Blogs.filter((Blog,index)=>i!==index))
  }


  return (
    <>
      <h1>Write a Blog</h1>
      <div className={styles.container}>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="blogTitle">Blog Title:</label>
            <input type="text" id="blogTitle" name="blogTitle"
              placeholder="Enter the title here...."
              value={formData.title}
              onChange={(e) => setFormData({title:e.target.value, content:formData.content})} />
          </div>
          <hr />
          <div className={styles.formGroup}>
            <label htmlFor="blogContent">Blog Content:</label>
            <textarea id="blogContent" name="blogContent" rows="5"
              placeholder="Blog content goes here...."
              value={formData.content}
              onChange={(e) => setFormData({title:formData.title,content:e.target.value})}>

            </textarea>
          </div>
          <hr />
          <button className={styles.btn}>Submit</button>
        </form>
      </div>
      <hr />
      <h2>Blogs</h2>
      {Blogs.map((e,i)=>{
        return(
        <><h3 className={styles.title} key={i}>{e.title}</h3>
        <p className={styles.content} key={i}>{e.content}</p>
        <button className={styles.btn} onClick={()=>{removeBlog(i)}}>Remove</button>
        <hr/></>
        
        )
      })}
    </>
  )
}