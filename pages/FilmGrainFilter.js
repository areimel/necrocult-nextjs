//IMPORTS
//import Head from '@components/Head/Head'
import Head from 'next/head'
import Header from '@components/Template/Header/Header'
import Container from '@components/Template/Container/Container'
import Sandbox from '@components/Template/Sandbox/Sandbox'
import ComponentMeta from '@components/Template/ComponentMeta/ComponentMeta'
import Footer from '@components/Template/Footer/Footer'

import FilmGrainFilter from '@components/FilmGrainFilter/FilmGrainFilter'

//VARS
export async function getStaticProps() {
  
  //General Page VARS
	  let title = "FilmGrainFilter"
	  let author = "Alec Reimel"
	  let authorTeam = "Planet Caravan Studios"
	  let description ="\
	  						Overlay filter based on VHS film grain.\
	  					"
	  let contentProps = 'N/A'
	  let libraries = "N/A"
	  
	  let footerMessage = "Created by Planet Caravan Studios"
  
  //Component Content
  	let postDataUrl = "test.com"

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

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Necro Cult Zine Component</title>
      </Head>

      <FilmGrainFilter/>

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
        	This component should be a top-level element.
        </Sandbox>
        
      </main>

      <Footer footerMessage={props.footerMessage} />
    </>
  )
}
