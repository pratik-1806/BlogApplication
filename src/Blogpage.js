import { useState , useEffect} from "react"
import styles from "./Blogpage.module.css"

export default function Blog(){
 

    

    return(
        <>
       <div className={styles.container}>
      <h1>Blog</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="blogTitle">Blog Title:</label>
          <input type="text" id="blogTitle" name="blogTitle" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="blogContent">Blog Content:</label>
          <textarea id="blogContent" name="blogContent" rows="5"></textarea>
        </div>
      </form>
    </div>
        </>
    )
}