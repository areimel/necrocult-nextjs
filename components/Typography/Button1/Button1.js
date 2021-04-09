import styles from './Button1.module.scss'
import styled from "styled-components";


export default function Button1({ 
  //page vars
  children,
  href,
  newTab
}) {
  return (
  	<a 
  		href={(href? href : "#")} 
  		className={styles.Button1} 
  		target={(newTab? "_blank" : "")}
  	>
  		<span className={styles.inner}>{children}</span>
  	</a>
  	
  )
}
