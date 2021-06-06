module.exports = {
  //distDir: 'build',	//Manual build folder
  serverRuntimeConfig: {
    // Will only be available on the server side
    //mySecret: 'secret',
    //secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
  images: {
      loader: 'imgix',
    },
}