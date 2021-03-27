import styles from './Typography.module.scss'
import styled from "styled-components";

const Wrapper = styled.div`
	
`;


export default function Typography({ 
  //page vars
}) {
  return (
  	<Wrapper 
  		className={styles.wrapper} 
  	>
  		<ul>
  			<li className={styles.old_english + " old_english"} >
  				Display Font: <span>AncientMedium</span>
  			</li>
  			<li className={styles.labelmaker + " labelmaker"}>
  				Alt Font: <span>Impact Label</span>
  			</li>
  			<li className={styles.typewriter + " typewriter"}>
  				Body Font: <span>MyUnderwood</span>
  			</li>
  		</ul>
  	</Wrapper>
  	
  )
}
