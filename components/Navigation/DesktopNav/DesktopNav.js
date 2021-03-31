import styles from './DesktopNav.module.scss'
import styled from "styled-components";
import Container from '@components/Layout/Container/Container'



export default function DesktopNav({ 
  //props
}) {
  return (
  	<nav id="DesktopNav" className={styles.DesktopNav} >
  		
  		<Container flex className={styles.upperNav}>
  			
  		</Container>	  

		<Container flex className={styles.mainNav}>

			<div className={styles.logoSection}>
				<a href="/" className={styles.logoMain}>
					<img src="/img/necro-cult-logo-trans.png" alt="Necro Cult Zine logo"/>
				</a>
			</div>

			<div className={styles.linkSection}>
				<div className={styles.navButton}>
					<i className="fas fa-bars"></i>
				</div>
			</div>

		</Container>	  

	</nav>
  )
}