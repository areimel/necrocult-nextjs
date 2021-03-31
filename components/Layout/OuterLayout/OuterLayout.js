import styles from './OuterLayout.module.scss'
import MasterJS from '@components/Layout/MasterJS/MasterJS'
import MasterCSS from '@components/Layout/MasterCSS/MasterCSS'
import DesktopNav from '@components/Navigation/DesktopNav/DesktopNav'
import Footer from '@components/Navigation/Footer/Footer'



export default function OuterLayout({ 
	//props
}) {
  return (
	<>
		<MasterCSS/>
		<div className={ styles.OuterLayout) }>
  			<DesktopNav/>
			{children}
			<Footer/>
		</div>
		<MasterJS/>
	</>
  )
}
