import { useState, useEffect } from "react"
import styles from "./Blogpage.module.css"

export default function Blog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [Blogs, setBlogs]= useState([]);

  function handleSubmit(e) {
    setBlogs([{title,content},...Blogs])
    console.log(Blogs)
    e.preventDefault();
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
              value={title}
              onChange={(e) => setTitle(e.target.value)} />
          </div>
          <hr />
          <div className={styles.formGroup}>
            <label htmlFor="blogContent">Blog Content:</label>
            <textarea id="blogContent" name="blogContent" rows="5"
              placeholder="Blog content goes here...."
              value={content}
              onChange={(e) => setContent(e.target.value)}>

            </textarea>
          </div>
          <hr />
          <button className={styles.btn}>Submit</button>
        </form>
      </div>
      <hr />
      <h2>Blogs</h2>
      {Blogs.map((e)=>{
        return(
        <><h3 className={styles.title}>{e.title}</h3>
        <p className={styles.content}>{e.content}</p>
        <hr/></>
        
        )
      })}
    </>
  )
}