//IMPORTS
//import Head from '@components/Head/Head'
import Head from 'next/head'
import Header from '@components/Template/Header/Header'
import Container from '@components/Template/Container/Container'
import Sandbox from '@components/Template/Sandbox/Sandbox'
import ComponentMeta from '@components/Template/ComponentMeta/ComponentMeta'
import Footer from '@components/Template/Footer/Footer'

import CutOut from '@components/Typography/CutOut/CutOut'

//VARS
export async function getStaticProps() {
  
  //General Page VARS
	  let title = "Initial Component Demo"
	  let author = "Alec Reimel"
	  let authorTeam = "Planet Caravan Studios"
	  let description ="\
	  						This is the inital demo template for Holy Mountain frontend components.  \
	  						Clone this page out for demoing new components.\
	  					"
	  let contentProps = 'N/A'
	  let libraries = "N/A"
	  
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

        	<CutOut>
        		Rising from the festering slime of the extreme metal underground comes Necro Cult. Through blasphemous sorcery and occult science, we bring forth the eldritch filth of our metalzine forefathers into this benighted age of technology. We spread the black gospel of metal through album reviews, reporting on local shows, and retrospectives on lesser known bands and subgenres.

        		Hailing from the witch-haunted woods of Pennsylvania, the black magicians of our cult plague mankind with only the greatest, most blasphemous and accursed Black Metal, Death Metal, Doom and Stoner Metal, Dungeon Synth, News, Culture, Art, Interviews, Live Shows, Film, True Crime, Gross Shit, Weird Shit, Fucked Up Shit, and whatever other filth and sleaze from the world of the underground that we want to cover.
        	</CutOut>

        </Sandbox>
        
      </main>

      <Footer footerMessage={props.footerMessage} />
    </>
  )
}
