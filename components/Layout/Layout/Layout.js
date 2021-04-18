import styles from './Layout.module.scss'
import MasterJS from '@components/Layout/MasterJS/MasterJS'
import MasterCSS from '@components/Layout/MasterCSS/MasterCSS'
import DesktopNav from '@components/Navigation/DesktopNav/DesktopNav'
import MobileNav from '@components/Navigation/MobileNav/MobileNav'
import NavMenu from '@components/Navigation/NavMenu/NavMenu'
import Footer from '@components/Navigation/Footer/Footer'



export default function Layout({ 
	//props
}) {
  return (
	<>
		<MasterCSS/>
		<div className={styles.OuterLayout}>
  			<NavMenu/>
  			<div className={styles.InnerLayout}>
  				<DesktopNav/>
	  			<MobileNav/>
				{children}
				<Footer/>

				<div></div>

  			</div>
		</div>
		<MasterJS/>
	</>
  )
}
