//IMPORTS
//import Head from '@components/Head/Head'
import Head from 'next/head'
import Header from '@components/Template/Header/Header'
import Container from '@components/Template/Container/Container'
import Sandbox from '@components/Template/Sandbox/Sandbox'
import ComponentMeta from '@components/Template/ComponentMeta/ComponentMeta'
import Footer from '@components/Template/Footer/Footer'

import TestSquare from '@components/Template/TestSquare/TestSquare'

import Texture from '@components/Textures/Texture/Texture'


//VARS
export async function getStaticProps() {
  
  //General Page VARS
	  let title = "Texture"
	  let author = "Alec Reimel"
	  let authorTeam = "Planet Caravan Studios"
	  let description ="\
		Paper texture overlays with tiled images.\
	  					"
	  let contentProps = 'option, opacity'
	  let libraries = "Styled Components"
	  
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

export default function Home(props) {
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

        	<TestSquare>
        		<p>option 1</p>
        		<Texture/>
        	</TestSquare>

        	<TestSquare>
        		<p>option 2</p>
        		<Texture option="2"/>
        	</TestSquare>

        	<TestSquare>
        		<p>option 3</p>
        		<Texture option="3"/>
        	</TestSquare>

        	<TestSquare>
        		<p>option 4</p>
        		<Texture option="4"/>
        	</TestSquare>

        	<TestSquare>
        		<p>option 5</p>
        		<Texture option="5"/>
        	</TestSquare>

        	<TestSquare>
        		<p>option 6</p>
        		<Texture option="6"/>
        	</TestSquare>        	

        	<TestSquare>
        		<p>option 7</p>
        		<Texture option="7"/>
        	</TestSquare>

        	<TestSquare>
        		<p>option 8</p>
        		<Texture option="8"/>
        	</TestSquare> 

        </Sandbox>
        
      </main>

      <Footer footerMessage={props.footerMessage} />
    </>
  )
}
