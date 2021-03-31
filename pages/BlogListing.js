//IMPORTS
//import Head from '@components/Head/Head'
import Head from 'next/head'
import Header from '@components/Template/Header/Header'
import Container from '@components/Template/Container/Container'
import Sandbox from '@components/Template/Sandbox/Sandbox'
import ComponentMeta from '@components/Template/ComponentMeta/ComponentMeta'
import Footer from '@components/Template/Footer/Footer'

import BlogListing from '@components/BlogListing/BlogListing'
import CustomHR from '@components/Typography/CustomHR/CustomHR'

//VARS
export async function getStaticProps() {
  
  //General Page VARS
	  let title = "Initial Component Demo"
	  let author = "Alec Reimel"
	  let authorTeam = "Planet Caravan Studios"
	  let description ="\This is the standard BlogListing component\
	  						Also included in this demo is the CustomHR component, \
	  						which would normally be used with the BlogListing component.\
	  					"
	  let contentProps = '{__html: \
	  		<ul>\
	  			<li>title</li>\
	  			<li>author</li>\
	  			<li>authorTeam</li>\
	  			<li>description</li>\
	  			<li>contentProps</li>\
	  			<li>libraries</li>\
	  		</ul>\
	  	}'
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

        	<BlogListing
        		postUrl = "#test"
        		postImage = "/img/morbid.jpg"
        		postAlbumCredit = "Morbid - Year of The Goat"
        		postColumn = "Tales From The Basement"
        		postHeadline = "Tales From The Basement: Morbid"
        		postSnippet = "It has only been a few hours since I've translated and spoke aloud the first of the demon resurrection passages from the Book of the Dead"
        	/>
        	<CustomHR/>
        	<BlogListing
        		postUrl = "#test"
        		postImage = "/img/morbid.jpg"
        		postAlbumCredit = "Morbid - Year of The Goat"
        		postColumn = "Tales From The Basement"
        		postHeadline = "Morbid: Year of The Goat"
        		postSnippet = "It has only been a few hours since I've translated and spoke aloud the first of the demon resurrection passages from the Book of the Dead"
        		reverse
        	/>

        </Sandbox>
        
      </main>

      <Footer footerMessage={props.footerMessage} />
    </>
  )
}
