import styles from './CutOut.module.scss'
import styled from "styled-components";


export default function CutOut({ 
  //page vars
  children,
}) {
  return (
  	<span className={styles.CutOut}>
  		{children}
  	</span>
  	
  )
}
