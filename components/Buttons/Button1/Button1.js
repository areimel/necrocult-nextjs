import styles from './Button1.module.scss'
import styled from "styled-components";


export default function Button1({ 
  //page vars
  children,
}) {
  return (
  	<span className={styles.Button1}>
  		{children}
  	</span>
  	
  )
}
