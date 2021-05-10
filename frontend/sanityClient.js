// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'w1jsruhz', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2021-05-10'
})