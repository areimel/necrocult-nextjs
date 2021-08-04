//IMPORTS
//import Head from '@components/Head/Head'
import Head from 'next/head'
import Header from '@components/Template/Header/Header'
import Container from '@components/Template/Container/Container'
import Sandbox from '@components/Template/Sandbox/Sandbox'
import ComponentMeta from '@components/Template/ComponentMeta/ComponentMeta'
import Footer from '@components/Template/Footer/Footer'
import TestSquare from '@components/Template/TestSquare/TestSquare'

import ModalWrapper from '@components/Modals/ModalWrapper/ModalWrapper'
import Button1 from '@components/Typography/Button1/Button1'


//VARS
export async function getStaticProps() {
  
  //General Page VARS
	  let title = "Initial Component Demo"
	  let author = "Alec Reimel"
	  let authorTeam = "Planet Caravan Studios"
	  let description ='\
		This is the inital demo template for Necro Cult Zine frontend components.  \
		Clone this page out for demoing new components.\
	  					'
	  let contentProps = '<ul class="listFix"><li>modal</li><li>dataYoutubeId</li></ul>'
	  let libraries = '<ul class="listFix"><li>Styled Components</li></ul>'
	  
	  let footerMessage = "Created by Planet Caravan Studios"

  
  //Component Content
  	

    return {
      props: {
        title,
        author,
        authorTeam,
        description,
        contentProps,
        libraries,
        footerMessage,
      }, // will be passed to the page component as props
  }
}

export default function Slider(props) {
return (
	<>
		<Head>
			<title>Necro Cult Zine Component</title>
		</Head>

		<main>
			<Header title="Necro Cult Zine Component Demo" />
			<Container>
				<ComponentMeta
					title={props.title}
					author={props.author}
					authorTeam={props.authorTeam}
					description={props.description}
					contentProps={props.contentProps}
					libraries={props.libraries}
				/>
			</Container>

			<Sandbox>

				{/*Components go here*/}
				<div>
					Set modal buttons by using the modal_open classes <br/>
					and set the specifc modal with the modal prop.  <br/><br/>

					The video modal uses the 'dataYoutubeId' prop to set the video. <br/>
					Video iFrame is cleared out on modal close. <br/>
					The video modal currently only supports YouTube videos, <br/>
					but is based on a generic iFrame, so further support is coming soon.
					<br/><br/><br/>

					<Button1
						className="modal_open"
						modal="DefaultModal"
						skew="skew4"
					>Default Modal</Button1>

					<br/><br/><br/>
					
					<Button1
						className="video_modal_open"
						modal="VideoModal"
						dataYoutubeId="ubBPXQ5U2_0"
						skew="skew1" /*default*/
					>Video Modal</Button1>
				</div>

			</Sandbox>

		</main>
		
		<Footer footerMessage={props.footerMessage} />

		<ModalWrapper/>
	</>
)
}
