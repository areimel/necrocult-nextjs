import styles from './BlogListing.module.scss'
import styled from "styled-components";



export default function BlogListing({ 
  //page vars
  postUrl,
  postImage,
  postAlbumCredit,
  postColumn,
  postHeadline,
  postSnippet,
  reverse
}) {
  return (
  	<article className={styles.blogListing +" "+ (reverse ? styles.reverse : " ")} >

  	  <div className={styles.image}>
  	    <a href={postUrl}>
  	      <img className="" src={postImage} alt={postAlbumCredit} />
  	    </a>
  	    <span className={styles.imageCredit + " labelmaker"}>{postAlbumCredit}</span>
  	  </div>
  	  

  	  <div className={styles.copy + " cut_paste"}>
  	    <div className={styles.inner}>
  	      
  	      <div className={styles.title }>
  	        <p className={styles.columnName + " labelmaker texture_cardboard_black"}>{postColumn}</p>
  	        <a className={styles.titleMain + " texture_paper_white"} href={postUrl}>{postHeadline}</a>
  	      </div>

  	      <div className={styles.snippet + " texture_paper_white" }>
  	        <p>{postSnippet}...</p>

  	        <a className={styles.readMore + " texture_cardboard_black"} href={postUrl}>
  	          Read More
  	        </a>
  	      </div>

  	    </div>
  	  </div>

  	</article>
  )
}
